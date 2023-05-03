import { useState } from 'react';
import ArrowUp from '../SVGComponents/ArrowUp';
import ArrowDown from '../SVGComponents/ArrowDown';
import Check from '../SVGComponents/Check';

interface Options {
	label: string;
	value: string;
}
interface DropdownProps {
	options: Options[];
	defaultSelectedOption: Options;
}

const Dropdown = ({ options, defaultSelectedOption }: DropdownProps) => {
	const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = (option: Options) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="flex items-center gap-2 relative">
			<span
				className={
					isOpen
						? 'flex gap-1 text-white-smoke opacity-75 '
						: 'flex gap-1 text-white-smoke'
				}
				onClick={() => setIsOpen(!isOpen)}
			>
				<p>Sort by :</p>{' '}
				<strong>
					{selectedOption ? selectedOption.label : 'Select an option'}
				</strong>
			</span>
			{isOpen ? (
				<ArrowUp className="stroke-white" />
			) : (
				<ArrowDown className="stroke-white" />
			)}
			{isOpen && (
				<ul className="bg-white absolute w-48 h-max top-12 divide-y divide-dark-slate-blue/10  rounded-xl shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)]">
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

export default Dropdown;
