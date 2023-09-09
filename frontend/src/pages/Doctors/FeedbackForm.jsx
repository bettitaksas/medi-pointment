import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <form action=''>
            <div>
                <p className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                    How would you rate the overall experience?*
                </p>
                <div>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type='button'
                                key={index}
                                className={`${
                                    index <= ((rating && hover) || hover)
                                        ? 'text-yellowColor'
                                        : 'text-gray-400'
                                } bg-transparent border-none outline-none cursor-pointer text-[22px]`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setRating(0);
                                    setHover(0);
                                }}
                            >
                                <span className='star'>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </form>
    );
};

export default FeedbackForm;
