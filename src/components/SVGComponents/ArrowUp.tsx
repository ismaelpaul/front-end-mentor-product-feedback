interface ArrowUpProps {
	className?: string;
	hasVoted?: boolean;
}

const ArrowUp = ({ className, hasVoted }: ArrowUpProps) => {
	return (
		<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
			<path
				className={className}
				d="M1 6l4-4 4 4"
				stroke={hasVoted ? '#FFFFFF' : '#4661E6'}
				strokeWidth="2"
				fill="none"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export default ArrowUp;
