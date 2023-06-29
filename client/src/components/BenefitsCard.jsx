import React from "react";

const BenefitsCard = ({ title, description }) => {
  return (
    <div
      className="card flex flex-col max-w-[300px] items-start px-10 md:px-14 py-8 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10
 shadow-md"
    >
      <div className="text-[28px] font-black tracking-tighter mb-4">
        {title}
      </div>
      <div className="text-[16px]  font-[600] text-start tracking-tight ">
        {description}
      </div>
    </div>
  );
};

export default BenefitsCard;
