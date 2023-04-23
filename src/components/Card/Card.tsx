type CardProps = {
	children: JSX.Element | JSX.Element[];
	cardClass: string;
};

const Card = ({ children, cardClass }: CardProps) => {
	return <article className={cardClass}>{children}</article>;
};

export default Card;
