import { useState } from 'react';
import { HiStar } from 'react-icons/hi';
import patientAvatar from '../../assets/images/avatar-icon.png';

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            name: 'Jessica Martinez',
            stars: 5,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula aliquam justo, a dignissim arcu consectetur vel. Quisque suscipit mauris vel erat gravida, eget condimentum augue euismod.',
        },
        {
            name: 'Robert Taylor',
            stars: 5,
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            name: 'Elizabeth Harris',
            stars: 5,
            content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            name: 'Muhibur Rahman',
            stars: 5,
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleNextSlide = () => {
        if (currentSlide < testimonials.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5 rounded-3'>
                <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} alt='' className='w-[50px] rounded-full'/>
                    <div>
                        <h4 className='text-[18px] leading-[30px] text-headingColor font-[600]'>
                            {testimonials[currentSlide].name}
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            {Array.from({ length: testimonials[currentSlide].stars }, (_, index) => (
                                <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
                            ))}
                        </div>
                    </div>
                </div>

                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    {testimonials[currentSlide].content}
                </p>
            </div>

            <div className='flex justify-center mt-4'>
                <button
                    className='mr-2 py-1 px-4 rounded-lg bg-primaryColor text-white font-medium'
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0}
                >
                    Previous
                </button>
                <button
                    className='py-1 px-4 rounded-lg bg-primaryColor text-white font-medium'
                    onClick={handleNextSlide}
                    disabled={currentSlide === testimonials.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
