/* eslint-disable react/prop-types */
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

    return (
        <div>
            <div className='mb-[50px]'>
                <h4 className='text-[20px] leading-[30px] text-headingColor font-bold mb-[30px]'>
                    All Reviews totalRating
                </h4>
                reviews
            </div>
            <div className='text-center'>
                <button className='btn'>Give Feedback</button>
            </div>

            <FeedbackForm />
        </div>
    );
};

export default Feedback;
