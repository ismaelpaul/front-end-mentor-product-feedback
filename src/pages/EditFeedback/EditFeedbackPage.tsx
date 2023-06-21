import { useSelector } from 'react-redux';
import EditFeedback from '../../components/Feedback/NewFeedback/EditFeedback';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import { RootState } from '../../redux/store';

const EditFeedbackPage = () => {
	const singleRequest = useSelector(
		(state: RootState) => state.productRequests.singleRequest
	);

	const link = `/product-requests/${singleRequest._id}`;
	const goBackClass =
		'text-light-slate-blue text-subtitleMobile font-jost font-bold tablet:text-text14px';

	return (
		<>
			<nav className="mt-8 mx-6 tablet:mt-14 tablet:mx-[7.125rem]">
				<GoBackLink link={link} goBackClass={goBackClass} />
			</nav>
			<EditFeedback />
		</>
	);
};

export default EditFeedbackPage;
