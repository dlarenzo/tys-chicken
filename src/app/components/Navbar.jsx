"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // State
  const [nav, setNav] = useState(false);

  // setting nav to change color when scrolling
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white font-bold">
        <Link
          style={{ color: `${textColor}` }}
          href="/"
          className="font-bold text-2xl text-transform uppercase"
        >
          Ty's Chicken
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex text-transform uppercase "
        >
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/">About Us</Link>
          </li>
          <li className="p-4">
            <Link href="/">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#0076E4]"
            >
              <Link href="/#gallery">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#0076E4]"
            >
              <Link href="/#gallery">About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#0076E4]"
            >
              <Link href="/work">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-[#0076E4]"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
