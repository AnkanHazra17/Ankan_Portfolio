import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../contents/Content";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full py-5 fixed top-0 z-20 flex items-center bg-primary">
      <div className="w-11/12 max-w-[1200px] mx-auto flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            Window.scrollTo(0, 0);
          }}
          className="flex items-center"
        >
          <p className="text-red-400 text-[24px] font-extrabold uppercase">
            ANKAN.
          </p>
        </Link>

        <div>
          <div className="hidden sm:flex gap-14 items-center">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white transition-all duration-100`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:hidden">
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <IoClose className="w-[28px] h-[28px] cursor-pointer"></IoClose>
            ) : (
              <HiMenuAlt3 className="w-[28px] cursor-pointer h-[28px]"></HiMenuAlt3>
            )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md`}
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white transition-all duration-100`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
