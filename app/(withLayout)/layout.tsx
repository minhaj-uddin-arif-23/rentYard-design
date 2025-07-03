import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero2 from "../components/componentstwo/Hero2";
import { Content } from "../components/componentstwo/Content";
import Footer2 from "../components/componentstwo/Footer2";
import HomeLayout3 from "../components/HomeLayout3";
import Homelayout4 from "../components/Homelayout4";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-[82vh]">{children}</div>
      <Footer />
      <div className="mt-20">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto">
        <Hero2 />
        <div className="min-h-[82vh]">
          <Content />
        </div>
      </div>
      <Footer2 />


      <div>
        <HomeLayout3 />
      </div>
      <div>
        <Homelayout4 />
      </div>
    </div>
  );
}
