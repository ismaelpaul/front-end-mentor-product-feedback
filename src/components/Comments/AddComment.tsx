import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Comments, User } from '../../interfaces/IProductRequests';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment } from '../../redux/features/productRequests/productRequestsSlice';
import { AppDispatch, RootState } from '../../redux/store';

type AddCommentsProps = {
	cardClass: string;
	setComments: Dispatch<SetStateAction<Comments[]>>;
};

const AddComment = ({ cardClass, setComments }: AddCommentsProps) => {
	const [characterCount, setcharacterCount] = useState(0);

	const buttonText = 'Post Comment';
	const buttonClass =
		'bg-purple text-white text-subtitleMobile font-semiBold rounded-lg w-32 h-10';
	const errorClass = 'text-red text-subtitleMobile -mt-2 mb-3';

	const singleRequest = useSelector(
		(state: RootState) => state.productRequests.singleRequest
	);

	const dispatch = useDispatch<AppDispatch>();

	const userSchema = z.object({
		image: z.string(),
		name: z.string(),
		username: z.string(),
	});
	const commentSchema = z.object({
		content: z
			.string()
			.min(2, { message: "Can't be empty or less than 2 characteres" })
			.max(250, { message: 'Comment content cannot exceed 250 characters' })
			.nonempty({ message: 'Can\t be empty' }),
		user: userSchema,
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(commentSchema),
		defaultValues: {
			content: '',
			user: {
				image:
					'https://res.cloudinary.com/dbm544gs6/image/upload/v1682884091/product%20feedback%20users/image-elijah_hiapda.jpg',
				name: 'Elijah Moss',
				username: 'exagon.bestagon',
			},
		},
	});

	const submitData = async (data: { content: string; user: User }) => {
		const newComment: Comments = {
			content: data.content,
			user: data.user,
		};

		await dispatch(
			addNewComment({ id: singleRequest._id ?? '', newComment: newComment })
		);

		setComments((prevComments: Comments[]) => [...prevComments, newComment]);

		reset();
	};

	const onSubmit = handleSubmit(submitData);
	return (
		<section className="m-6">
			<Card cardClass={cardClass}>
				<form className="p-6" onSubmit={onSubmit}>
					<h2 className="text-dark-slate-blue text-title18px font-bold tracking-tight mb-6">
						Add comment
					</h2>
					<textarea
						{...register('content')}
						maxLength={250}
						placeholder="Type your comment here"
						className="bg-white-ghost text-regent-grey text-subtitleMobile rounded-md resize-none p-6 w-full h-32 outline-none focus:outline-blue outline-1 tablet:text-text15px"
						onChange={(e) => setcharacterCount(e.target.value.length)}
					></textarea>
					{errors.content && (
						<span className={errorClass}>{errors.content.message}</span>
					)}
					<div className="flex items-center justify-between mt-4">
						<span className="text-light-slate-blue text-subtitleMobile tablet:text-text15px">
							{250 - characterCount} characteres left
						</span>
						<Button
							type="submit"
							buttonText={buttonText}
							buttonClass={buttonClass}
						/>
					</div>
				</form>
			</Card>
		</section>
	);
};

export default AddComment;
