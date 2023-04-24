interface ButtonProps {
	buttonText: string;
	buttonClass: string;
}
const Button = ({ buttonText, buttonClass }: ButtonProps) => {
	return <button className={buttonClass}>{buttonText}</button>;
};

export default Button;
