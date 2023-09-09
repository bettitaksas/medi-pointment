import Testimonial from '../../components/Testimonial/Testimonial';
import DoctorCard from "../../components/Doctors/DoctorCard";

const Doctors = () => {
    return (
        <>
            <section className='bg-[#0AA18F42]'>
                <div className='container text-center'>
                    <h2 className='heading'>Find a Doctor</h2>
                    <div className='max-w-[570px] mx-auto mt-[30px] bg-[#0066ff2c] rounded-md flex items-center justify-between '>
                        <input
                            className='py-4 pl-4 pr-2 focus:outline-none cursor-pointer w-full bg-transparent placeholder:text-textColor'
                            type='search'
                            placeholder='Search by doctor name or specialization'
                        />
                        <button className='btn mt-0 rounded-[0px] rounded-r-md'>
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <DoctorCard />
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='xl:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>
                            What our patient say
                        </h2>
                        <p className='text__para text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>

                    <Testimonial />
                </div>
            </section>
        </>
    );
};

export default Doctors;
