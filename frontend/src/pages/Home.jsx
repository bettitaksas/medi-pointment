import homeImg1 from '../assets/images/home-img1.png';
import homeImg2 from '../assets/images/home-img2.png';
import homeImg3 from '../assets/images/home-img3.png';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import About from '../components/About/About.jsx';

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

                        {/* =====img===== */}
                        <div className='flex gap-[30px] justify-end'>
                            <div>
                                <img
                                    className='w-full rounded-lg'
                                    src={homeImg1}
                                    alt='home_img'
                                />
                            </div>
                            <div className='mt-[12px]'>
                                <img
                                    className='w-full mb-[30px] rounded-lg'
                                    src={homeImg2}
                                    alt='home_img'
                                />
                                <img
                                    className='w-full rounded-lg'
                                    src={homeImg3}
                                    alt='home_img'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====how it works section===== */}
            <section>
                <div className='container '>
                    <div className='lg:w-[450px] mx-auto'>
                        <h2 className='heading text-center'>
                            Our patients receive the finest medical care.
                        </h2>
                        <p className='text__para text-center'>
                            Professional medical services for everyone. Our
                            health System offers unmatched, expert health care.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
                    <div className='py-[30px] px-5 '>
                        <div className='flex items-center justify-center'>
                            <img
                                src={icon1}
                                alt=''
                                className='w-[200px] rounded-lg'
                            />
                        </div>

                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                Find a Doctor
                            </h2>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Natus quaerat cumque fugit.
                            </p>

                            <Link
                                to='/doctors'
                                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none'
                            >
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>

                    <div className='py-[30px] px-5 '>
                        <div className='flex items-center justify-center'>
                            <img
                                src={icon2}
                                alt=''
                                className='w-[200px] rounded-lg'
                            />
                        </div>

                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                Find a Location
                            </h2>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Natus quaerat cumque fugit.
                            </p>

                            <Link
                                to='/doctors'
                                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none'
                            >
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                    <div className='py-[30px] px-5 '>
                        <div className='flex items-center justify-center'>
                            <img
                                src={icon3}
                                alt=''
                                className='w-[200px] rounded-lg'
                            />
                        </div>

                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                                Book Appointment
                            </h2>
                            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Natus quaerat cumque fugit.
                            </p>

                            <Link
                                to='/doctors'
                                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none'
                            >
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <About />

            {/* =====services===== */}
            <section>
                <div className='container'>
                    <div className='xl:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>
                            Our medical services
                        </h2>
                        <p className='text__para text-center'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Natus quaerat cumque fugit.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
