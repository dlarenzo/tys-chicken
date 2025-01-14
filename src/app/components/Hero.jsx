import React from "react";
import Image from "next/image";

const Hero = ({ message }) => {
  return (
    <div className="h-[80vh] bg-[url('/imgs/hero_bg.png')] bg-fixed bg-cover bg-center flex justify-center items-center relative">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[80vh]  bg-[#0076E4]/40 z-[2]" />
      <div className="flex justify-center items-center  pt-5 pb-5 max-w-[1400px] z-[2] text-white">
        <p className=" w-[70%] pl-5 py-5 text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-bold leading-snug">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Hero;
