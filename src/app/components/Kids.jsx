import React from "react";

const Kids = ({ title, subtitle, message }) => {
  return (
    <div className="max-w-[1240px] m-auto py-20 h-[70vh] bg-[url('/imgs/menu/LogoKidsCup.png')] bg-fixed bg-contain bg-center flex justify-center items-center relative">
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[70vh]  bg-black/35 z-[2]" />
      <div className="z-[2] bg-[#0076e4]/40 w-full p-20">
        <h1 className="text-8xl font-extrabold text-center  text-transform uppercase">
          {title}
        </h1>
        <p className="text-6xl text-center font-bold mt-4">{subtitle}</p>
        <p className="text-5xl text-center mt-4">{message}</p>
      </div>
    </div>
  );
};

export default Kids;
