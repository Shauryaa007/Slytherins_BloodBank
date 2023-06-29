import React from "react";
import { BenefitsCard } from "./index";
import { benifits } from "../constant/index";
const BenefitsSection = () => {
  return (
    <div className="font-Inter mt-10 md:mt-0 flex flex-col justify-center items-center">
      <div className="md:text-[64px] text-[40px]  font-black leading-[140px] tracking-tight">
        Benefits
      </div>
      <div className="flex flex-col md:flex-row justify-around gap-16 md:gap-32">
        {benifits.map((benifit, i) => (
          <BenefitsCard
            key={i}
            title={benifit.title}
            description={benifit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
