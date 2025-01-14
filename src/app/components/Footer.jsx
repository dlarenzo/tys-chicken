import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0076E4] py-4 text-xl md:text-2xl font-bold flex justify-center items-center text-white text-transform uppercase">
      <div className="flex justify-center items-center w-[60px] h-[60px] mx-4">
        <Image src="/imgs/logo.png" width={600} height={600} alt="logo" />
      </div>
      <p>Ty's Chicken &copy; 2025</p>
    </div>
  );
};

export default Footer;
