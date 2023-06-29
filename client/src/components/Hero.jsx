import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col py-16 mt-8 font-Inter">
      <div className="md:text-[100px] sm:text-[60px] text-[40px] font-black not-italic md:leading-[121px]  tracking-tighter">
        Be a Hero.
      </div>
      <div className="md:text-[100px] sm:text-[60px] text-[40px] font-black not-italic md:leading-[121px] tracking-tighter">
        Donate Blood.
      </div>
      <div className="not-italic md:leading-[44px] font-[400] tracking-tighter max-w-[800px] md:text-[28px] text-[16px]">
        Your generosity can save lives. Join our online blood bank and be a hero
        in your community.
      </div>
      <button className="border-black border-[3px] font-[800] text-[16px] md:text-[28px] md:px-[12px] md:py-[6px] w-[120px] md:w-[190px] mt-4 ">
        Join
      </button>
    </div>
  );
};

export default Hero;
