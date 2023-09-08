"use client";

import useRoutes from "@/hooks/useRoutes";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
const Navbar = () => {
  const routes = useRoutes();
  const { setTheme, theme } = useTheme();
  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <nav className="h-[8vh] flex justify-between items-center px-8 w-full ">
        <h1 className="text-xl font-bold">Blog Assignment</h1>
        <div className="flex gap-2 items-center h-full justify-center">
          {routes.map((ele, id) => (
            <Link
              className={`${
                ele.active &&
                " bg-sky-600 text-white rounded-[5px] transition-all"
              } py-1 px-4 text-sm`}
              href={ele.href}
              key={id}
            >
              {ele.label}
            </Link>
          ))}

          <Button
            onClick={toggleMode}
            size={"sm"}
            className="hover:dark:bg-sky-600 rounded-[5px] hover:text-white h-max hover:bg-sky-600 p-2"
            variant="ghost"
          >
            <Sun className=" transition-all h-4 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute  h-4  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
