interface ButtonProps {
	buttonText: string;
	buttonClass: string;
	type?: 'button' | 'submit';
}
const Button = ({ buttonText, buttonClass, type = 'button' }: ButtonProps) => {
	return (
		<button type={type} className={buttonClass} aria-label={buttonText}>
			{buttonText}
		</button>
	);
};

export default Button;
