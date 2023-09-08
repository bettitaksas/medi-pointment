import React from 'react';

const Home = () => {
    return (
        <>
            <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                        {/* =====hero content===== */}
                        <div>
                            <div className=' lg:w-[570px]'>
                                <h1 className='text-headingColor text-[36px] leading-[46px] md:text-[60px] md:leading-[70px] font-[800] '>
                                    We help patients live a healthy, longer
                                    life.
                                </h1>
                                <p className='text__para'>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Natus quaerat cumque
                                    fugit, perspiciatis cum nemo aperiam, aut
                                    quia earum amet architecto, modi odio.
                                    Soluta unde ducimus perferendis?
                                </p>
                                <button className='btn'>
                                    Request an Appointment{' '}
                                </button>
                            </div>

                            <div className='mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                        20+
                                    </h2>
                                    <span className='w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]'></span>
                                    <p className='text__para'>
                                        Years of Experience
                                    </p>
                                </div>

                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                        15+
                                    </h2>
                                    <span className='w-[100px] h-2 rounded-full bg-purpleColor block mt-[-14px]'></span>
                                    <p className='text__para'>
                                        Clinic Location
                                    </p>
                                </div>

                                <div>
                                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                                        100%
                                    </h2>
                                    <span className='w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-14px]'></span>
                                    <p className='text__para'>
                                        Patient Satisfaction
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
