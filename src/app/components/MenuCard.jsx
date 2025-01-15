import React from "react";
import Image from "next/image";

const MenuCard = ({ title, price, image, description }) => {
  return (
    <div
      className="bg-center bg-cover h-auto mb-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-[#0076E4] rounded-full  w-[100px] h-[100px] font-bold text-2xl relative top-5 left-5 text-[45px] flex justify-center items-center">
        ${price}
      </div>

      <div className="bg-[#0076E4]/90 p-5 text-center mt-80">
        <p className="text-3xl font-bold pb-2">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
