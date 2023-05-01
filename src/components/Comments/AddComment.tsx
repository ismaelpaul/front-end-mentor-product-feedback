import { useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';

type CardClassProps = {
	cardClass: string;
};

const AddComment = ({ cardClass }: CardClassProps) => {
	const [characterCount, setcharacterCount] = useState(0);

	const buttonText = 'Post Comment';
	const buttonClass =
		'bg-purple text-white text-subtitleMobile font-semiBold rounded-lg w-32 h-10';

	return (
		<>
			<Card cardClass={cardClass}>
				<div className="p-6">
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tight mb-6">
						Add comment
					</h1>
					<textarea
						maxLength={250}
						placeholder="Type your comment here"
						className="bg-white-ghost text-regent-grey text-subtitleMobile rounded-md resize-none p-6 w-full h-32 outline-none focus:outline-blue outline-1"
						onChange={(e) => setcharacterCount(e.target.value.length)}
					></textarea>
					<div className="flex items-center justify-between mt-4">
						<span className="text-light-slate-blue text-subtitleMobile">
							{250 - characterCount} characteres left
						</span>
						<Button buttonText={buttonText} buttonClass={buttonClass} />
					</div>
				</div>
			</Card>
		</>
	);
};

export default AddComment;
