"use client";

import useRoutes from "@/hooks/useRoutes";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const routes = useRoutes();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="h-[8vh] flex justify-between items-center px-2 w-full ">
        <h1 className="text-xl font-bold">Blog Assignment</h1>
        <div className="flex gap-2 items-center h-full justify-center mx-6">
          {routes.map((ele, id) => (
            <Link
              className={`${
                ele.active && " bg-sky-600 text-white rounded-md transition-all"
              } py-1 px-4 text-sm`}
              href={ele.href}
              key={id}
            >
              {ele.label}
            </Link>
          ))}

          <button
            onClick={() => {
              theme === "light" ? setTheme("dark") : setTheme("light");
            }}
            className="px-2 transition-all rounded-md cursor-pointer py-2 text-xl flex justify-center dark:text-gray-200 dark:hover:bg-sky-600 text-gray-700  "
          >
            {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
