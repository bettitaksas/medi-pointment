/* eslint-disable react/prop-types */

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { name, desc } = item;

  return (
    <div className=" py-[30px] px-3 lg:px-[20px] ">
      <h2 className="text-[26px] leading-9 font-[700] text-headingColor">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex  items-center justify-center group hover:bg-primaryColor hover:text-white"
        >
          <BsArrowRight className="w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;