import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      
    </div>
  );
}
