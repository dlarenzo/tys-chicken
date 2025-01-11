import React from "react";
import Image from "next/image";

const Hero = ({ message }) => {
  return (
    <div className="h-[75vh] bg-[url('/imgs/hero_bg.png')] bg-fixed bg-cover bg-center flex justify-center items-center relative">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[80vh]  bg-[#0076E4]/40 z-[2]" />
      <div className="flex justify-center items-center pt-5 pb-5 max-w-[1200px] z-[2] text-white ">
        <Image src="/imgs/logo.png" width={600} height={600} alt="logo" />
        <p className="pl-20 lin text-7xl font-bold leading-snug">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
