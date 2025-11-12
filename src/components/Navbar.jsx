import {
  CircleUser,
  Dot,
  EllipsisVertical,
  LogIn,
  Menu,
  Mic,
  Search,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="h-16 p-5 border-b-2 border-neutral-700 flex items-center justify-between gap-1 ">
        <div className="flex items-center justify- gap-1">
          <Menu />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
            className="h-6"
            alt="yt-logo"
          />
          <h1 className="text-[24px] font-semibold tracking-tighter">
            YouTube
          </h1>
        </div>
        <div className="flex items-center sm:gap-3">
          <div className="flex items-center">
            <input className="hidden sm:block h-10 w-130 border-[0.5px] border-neutral-800 rounded-s-full" />
            <button className="flex justify-center items-center h-10 w-14 sm:border-[0.5px] sm:border-neutral-800 rounded-e-full sm:bg-neutral-800">
              <Search />
            </button>
          </div>
          <button className=" sm:border-neutral-600 rounded-full p-2 sm:bg-neutral-800">
            <Mic />
          </button>
        </div>

        <div className="flex justify-center items-center sm:gap-4">
          <EllipsisVertical />
          <button className="flex justify-center items-center gap-1 border border-neutral-600 rounded-full px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <CircleUser className="w-5 h-5" />
            <span className="sm:inline ">Sign in</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
