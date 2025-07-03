import { Button } from "@/components/ui/button";
import React from "react";

export default function Footer2() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2 w-11/12 mx-auto">
        <h1 className="text-lg font-medium text-gray-700">Back</h1>

        <Button  className="bg-blue-600 text-white  ">
          Get started
        </Button>
      </div>
    </div>
  );
}
