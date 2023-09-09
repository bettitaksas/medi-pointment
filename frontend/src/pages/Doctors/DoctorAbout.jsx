/* eslint-disable react/prop-types */
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            name
          </span>
        </h3>
        <p className="text__para">about</p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          qualifications
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Experience
        </h3>
        <ul className="pt-4 md:p-5 grid sm:grid-cols-2  gap-[30px]">
          experiences
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
