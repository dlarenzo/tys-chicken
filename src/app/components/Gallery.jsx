import React from "react";
import Image from "next/image";

const Gallery = ({ title }) => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-center my-8  text-transform uppercase">
        {title}
      </h1>
      <div className="grid grid-rows-none md:grid-cols-5 px-4 py-2 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="/imgs/gallery/gallery0.webp"
            alt="/"
            width="677"
            height="451"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            className="object-cover"
            fill
            src="/imgs/gallery/gallery1.jpg"
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/imgs/gallery/gallery2.webp"
            className="object-cover"
            fill
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/imgs/gallery/gallery3.jpg"
            className="object-cover"
            fill
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/imgs/gallery/gallery4.jpg"
            className="object-cover"
            fill
            alt="/"
          />
        </div>
      </div>
      {/* Next block in the gallery */}
      <div className="grid grid-rows-none md:grid-cols-5 px-4 py-2 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2 ">
          <Image
            src="/imgs/gallery/gallery5.webp"
            alt="/"
            width="677"
            height="451"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%] order-first">
          <Image
            className="object-cover"
            fill
            src="/imgs/gallery/gallery6.jpg"
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/imgs/gallery/gallery7.jpg"
            className="object-cover"
            fill
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/imgs/gallery/gallery8.jpg"
            className="object-cover"
            fill
            alt="/"
          />
        </div>
        <div className="w-full h-full relative min-h-[200px] md:min-h-[50%] min-w-[25%]">
          <Image
            src="/imgs/gallery/gallery9.jpg"
            className="object-cover"
            fill
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
