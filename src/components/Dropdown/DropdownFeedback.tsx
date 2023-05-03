import { useState } from 'react';
import ArrowDown from '../SVGComponents/ArrowDown';
import ArrowUp from '../SVGComponents/ArrowUp';
import Check from '../SVGComponents/Check';

interface Options {
	label: string;
	value: string;
}
interface DropdownProps {
	options: Options[];
	defaultSelectedOption: Options;
}

const DropdownFeedback = ({
	options,
	defaultSelectedOption,
}: DropdownProps) => {
	const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = (option: Options) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className="flex items-center justify-between bg-white-ghost rounded-lg h-12 px-4 relative"
		>
			<span className="text-dark-slate-blue">{selectedOption.label}</span>
			{isOpen ? <ArrowUp /> : <ArrowDown />}

			{isOpen && (
				<ul className="bg-white absolute w-full h-max top-14     left-0 divide-y divide-dark-slate-blue/10  rounded-xl shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)]">
					{options.map((option, index) => {
						return (
							<>
								<li
									key={index}
									className="text-light-slate-blue flex items-center justify-between px-6 py-3 "
									onClick={() => handleOptionClick(option)}
								>
									{option.label}
									{selectedOption && selectedOption.label === option.label && (
										<Check />
									)}
								</li>
							</>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default DropdownFeedback;
