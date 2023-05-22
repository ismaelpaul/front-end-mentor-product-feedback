import { useState } from 'react';
import ArrowDown from '../SVGComponents/ArrowDown';
import ArrowUp from '../SVGComponents/ArrowUp';
import Check from '../SVGComponents/Check';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_SELECTED_OPTION_FORM,
	selectOptionForm,
} from '../../redux/features/productRequests/productRequestsSlice';

interface Options {
	label: string;
	value: string;
}
interface DropdownProps {
	options: Options[];
}

const DropdownFeedback = ({ options }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectedOption = useSelector(selectOptionForm);

	const dispatch = useDispatch();

	const handleOptionClick = (option: Options) => {
		dispatch(SET_SELECTED_OPTION_FORM(option));
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
							<div key={index}>
								<li
									className="text-light-slate-blue flex items-center justify-between px-6 py-3 "
									onClick={() => handleOptionClick(option)}
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
