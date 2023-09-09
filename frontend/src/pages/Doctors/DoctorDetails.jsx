import { useState } from 'react';
import doctorImg from '../../assets/images/doctor-img1.png';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails = () => {
    const [tab, setTab] = useState('about');

    return (
        <section>
            <div className='max-w-[1170px] px-[20px] mx-auto'>
                <div className='grid md:grid-cols-3 gap-[50px]'>
                    <div className='md:col-span-2'>
                        <div className='flex gap-5 items-center'>
                            <figure className='max-w-[200px] max-h-[200px]'>
                                <img
                                    src={doctorImg}
                                    alt=''
                                    className='w-full'
                                />
                            </figure>
                            <div>
                                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-[600]'>
                                    specialization
                                </span>
                                <h3 className='text-headingColor text-[22px] leading-[36px] mt-3 font-bold'>
                                    name
                                </h3>
                                <div className='flex items-center gap-[6px]'>
                                    <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor'>
                                        <img src={starIcon} alt='' />{' '}
                                        averageRating
                                    </span>
                                    <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                                        totalRating
                                    </span>
                                </div>
                                <p className='text__para text-[14px] md:text-[15px] leading-6 lg:max-w-[390px]'>
                                    bio
                                </p>
                            </div>
                        </div>

                        <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                            <div>
                                <button
                                    onClick={() => setTab('about')}
                                    className={`${
                                        tab === 'about' &&
                                        'border-b border-solid border-[#0067FF]'
                                    }  p-2 mr-5 px-5  text-headingColor font-semibold text-[16px] leading-7  `}
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => setTab('feedback')}
                                    className={`${
                                        tab === 'feedback' &&
                                        'border-b border-solid border-[#0067FF]'
                                    } py-2 px-5  font-semibold text-headingColor text-[16px] leading-7 `}
                                >
                                    Feedback
                                </button>
                            </div>
                        </div>

                        <div className='mt-[50px]'>
                            {tab === 'about' && (
                                <div>
                                    <DoctorAbout />
                                </div>
                            )}
                            {tab === 'feedback' && (
                                <div>
                                    <Feedback />
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <SidePanel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorDetails;
