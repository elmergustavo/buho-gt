import React from "react";
import { NavLinks } from "@/constant";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="bg-[#F5F5F5] w-full text-sm font-bold  text-center flex justify-center items-center">
      <nav className=" p-4">
        <ul className="flex justify-between items-center space-x-10">
          {NavLinks.map((link) => (
            <li className="" key={link.text}>
              <Link href={link.href} key={link.text} className="flex gap-1">
                {link.text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
