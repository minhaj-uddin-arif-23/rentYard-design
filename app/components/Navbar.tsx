"use client";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Navbar() {
  return (
    <header className=  "   w-full px-6 py-4 shadow-sm border-b bg-white">
      <div className="w-11/12  mx-auto flex justify-between items-center">
        {/* Brand with Icon */}
        <div className="flex items-center gap-2">
          <Building2 size={28} className="text-blue-600" />
          <h1 className="text-2xl font-semibold text-blue-600 tracking-tight">
            RentYard
          </h1>
        </div>

        {/* Exit Button */}
        <Button className="bg-white text-black border border-black hover:bg-black hover:text-white transition">
          Exit
        </Button>
      </div>
    </header>
  );
}
