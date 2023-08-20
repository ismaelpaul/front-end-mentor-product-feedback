import { useState } from 'react';
import ArrowDown from '../SVGComponents/ArrowDown';
import ArrowUp from '../SVGComponents/ArrowUp';
import Check from '../SVGComponents/Check';

export interface Options {
	label: string;
	value: string;
}
type DropdownProps = {
	options: Options[];
	selectedOption: Options;
	onOptionSelect: (option: Options) => void;
};

const DropdownFeedback = ({
	options,
	selectedOption,
	onOptionSelect,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className="flex items-center justify-between bg-white-ghost rounded-lg h-12 px-4 relative cursor-pointer"
		>
			<span className="text-dark-slate-blue">{selectedOption.label}</span>
			{isOpen ? <ArrowUp /> : <ArrowDown />}

			{isOpen && (
				<ul className="bg-white absolute w-full top-full left-0 mt-1 z-10 divide-y divide-dark-slate-blue/10 rounded-xl shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)]">
					{options.map((option, index) => {
						return (
							<div key={index}>
								<li
									className="text-light-slate-blue flex items-center justify-between px-6 py-3 "
									onClick={() => onOptionSelect(option)}
								>
									{option.label}
									{selectedOption && selectedOption.label === option.label && (
										<Check />
									)}
								</li>
							</div>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default DropdownFeedback;
