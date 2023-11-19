import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import { Menu } from "../Menu";

export default function LayoutMain({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      <Navbar />
      <Menu />

      <main className="max-w-10xl mx-auto">{children}</main>
    </>
  );
}
