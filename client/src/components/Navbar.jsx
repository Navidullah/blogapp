import { Link } from "react-router-dom";
import { useState } from "react";
import { BsClipboardPulse, BsJustify } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import AuthLinks from "./AuthLinks";
//import { MdOutlineWbSunny } from "react-icons/md";
//import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className=" bg-coral-blue font-Roboto max-[1024px]:max-w-[1024px]">
        <nav className="  flex  items-center justify-around py-5 max-[1024px]:px-3 ">
          <Link
            to="/"
            className="flex items-center text-3xl text-coral-white max-md:text-2xl"
          >
            <BsClipboardPulse />
            <span>ThePulse</span>
          </Link>
          <div className=" flex items-center gap-3 text-xl text-coral-white max-[1024px]:hidden">
            <IoMoonOutline className=" cursor-pointer" />
            <Link to="/">HomePage</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/write">Write</Link>
            <AuthLinks className="w-max" />
            <Link
              to="/signin"
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg"
            >
              SignIn
            </Link>
          </div>
          <BsJustify
            size={35}
            className="hidden max-[1024px]:flex cursor-pointer text-coral-white"
            onClick={() => setOpen((prev) => !prev)}
          />
        </nav>
      </header>

      {open && (
        <>
          <div className=" hidden  max-[1024px]:flex flex-col items-center  text-l font-semibold text-slate-gray">
            <Link
              to="/"
              className="setcol text-[18px]  font-normal text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              HomePage
            </Link>
            <Link
              to="/contact"
              className="setcol text-[18px] font-normal  text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/write"
              className="setcol text-[18px] font-normal text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              Write
            </Link>
            <AuthLinks />
            <Link
              to="/signin"
              className="setcol text-[18px] font-normal text-center py-2  hover:bg-lightcriBlue w-full border-b "
              onClick={() => setOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
