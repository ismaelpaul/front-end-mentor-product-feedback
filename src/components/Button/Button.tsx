import { ReactNode } from 'react';

interface ButtonProps {
	buttonText?: string;
	buttonClass: string;
	type?: 'button' | 'submit';
	form?: string;
	onClick?: () => void;
	children?: ReactNode;
}
const Button = ({
	buttonText,
	buttonClass,
	type = 'button',
	form,
	onClick,
	children,
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={buttonClass}
			aria-label={buttonText}
			form={form}
			onClick={onClick}
		>
			{children}
			{buttonText}
		</button>
	);
};

export default Button;
