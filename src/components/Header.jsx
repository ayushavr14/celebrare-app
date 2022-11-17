import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md ">
        <div className="  relative mx-auto flex h-14 w-full max-w-[1200px] items-center justify-center px-5 transition-all duration-500 ease-in-out md:h-20 md:justify-between">
          <div className="flex items-center justify-center ">
            <a href="/">
              <img className="h-11" src={Logo} alt="/" />
            </a>
          </div>
          <ul className="hidden items-center justify-center gap-8 font-medium md:flex">
            <li className="cursor-pointer">
              Weeding Cards
            </li>
            <li className="cursor-pointer">
              Birthday Cards
            </li>
            <li className="cursor-pointer">
              Feeling Cards
            </li>
            <li className="cursor-pointer">
              Anniversary Cards
            </li>
          </ul>
          <div className="hidden font-normal md:block cursor-pointer">
            Login/SignIn
          </div>
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-5 h-8 w-8 cursor-pointer md:hidden"
              onClick={() => setNav(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-5 h-8 w-8 cursor-pointer md:hidden"
              onClick={() => setNav(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      {nav && (
        <div
          className={`fixed ${
            nav && "inset-0"
          } z-40 bg-white transition-all duration-500 ease-in-out`}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-8 text-xl font-medium ">
            <li
              className="cursor-pointer hover:font-extrabold"
              onClick={() => setNav(false)}
            >
              Weeding Cards
            </li>
            <li
              className="cursor-pointer hover:font-extrabold"
              onClick={() => setNav(false)}
            >
              Birthday Cards
            </li>
            <li
              className="cursor-pointer hover:font-extrabold"
              onClick={() => setNav(false)}
            >
              Feeling Cards
            </li>
            <li
              className="cursor-pointer hover:font-extrabold"
              onClick={() => setNav(false)}
            >
              Anniversary Cards
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
