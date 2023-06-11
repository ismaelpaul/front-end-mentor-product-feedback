import Button from '../Button/Button';

const ReplyComment = () => {
	const buttonText = 'Post Reply';
	const buttonClass =
		'bg-purple text-white text-subtitleMobile font-semiBold rounded-lg w-32 h-10';
	return (
		<form>
			<div className="text-end mb-6">
				<textarea className="bg-white-ghost text-regent-grey text-subtitleMobile rounded-md resize-none mb- p-6 w-full h-32 outline-none focus:outline-blue outline-1" />
				<Button buttonClass={buttonClass} buttonText={buttonText} />
			</div>
		</form>
	);
};

export default ReplyComment;
