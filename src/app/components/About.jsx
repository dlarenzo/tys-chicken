import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="max-w-[1240px] m-auto p-4">
      <h1 className="text-6xl md:text-8xl  font-bold text-center my-8  text-transform uppercase">
        About
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <Image
            src="/imgs/about/Owner2.png"
            alt="Image of Food Truck owner"
            width={500}
            height={500}
          />
        </div>
        <div className="text-2xl px-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, doloremque, quod quidem quia sit doloribus placeat
            dolorum, voluptate quidem quia sit doloribus placeat dolorum,
            voluptate
          </p>
          <br></br>
          <p>
            Blanditiis numquam alorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolorem ex eos atque aspernatur distinctio, sed
            fugiat, ipsa harum libero suscipit blanditiis numquam accusantium
            similique dolorum deserunt eaque minus veniam excepturi deleniti
            aliquid illo. Ullam, fugiat! Natus eum sed aliquid voluptas.
          </p>
          <br></br>
          <div className="flex justify-end">
            <Image
              src="/imgs/about/-Ty.png"
              width={75}
              height={75}
              alt="Food truck owner image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
