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
		'text-light-slate-blue text-subtitleMobile font-jost font-bold';

	return (
		<div className="gap-6 m-6 mt-8">
			<GoBackLink link={link} goBackClass={goBackClass} />
			<EditFeedback />
		</div>
	);
};

export default EditFeedbackPage;
