"use client";
import React from "react";
import Image from "next/image";

const Email = ({ title, email }) => {
  const handleMailtoClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="contact" className="max-w-[1240px] m-auto p-4">
      <div className="h-[80vh] bg-[url('/imgs/email/gallery0.webp')] bg-fixed bg-cover bg-center flex justify-center items-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-[80vh]  bg-[#0076E4]/40 z-[2]" />
        <div className="flex flex-col justify-center items-center z-[2]">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center min-w-100px md:w-[280px]  sm:w-[400px] md:w-[500px] my-5">
            {title}
          </div>
          <button
            className="text-center my-5 bg-white text-[#0076E4] w-[50%]  py-5 font-bold text-2xl"
            onClick={() => handleMailtoClick("dlarenzo@outlook.com")}
          >
            {email}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
