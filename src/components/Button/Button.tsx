interface ButtonProps {
	buttonText: string;
	buttonClass: string;
	type?: 'button' | 'submit';
	form?: string;
	onClick?: () => void;
}
const Button = ({
	buttonText,
	buttonClass,
	type = 'button',
	form,
	onClick,
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={buttonClass}
			aria-label={buttonText}
			form={form}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
