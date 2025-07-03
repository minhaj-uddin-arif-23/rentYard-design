"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export function Content() {
  return (
    <div>
      {/* section - 1 */}
      <div className="p-6 space-y-6">
        {/* Section 1: Info Box */}
        <section>
          <div className="border-2 border-gray-300 bg-gray-100 text-gray-700 p-4 rounded-xl">
            <h1 className=" text-gray-500">
              Proof of Ownership Document
            </h1>
          </div>
        </section>

        {/* Section 2: PDF Upload */}
        <section className="p-4 space-y-4">
          <h1 className="text-lg font-semibold">
            Upload Ownership Document (PDF)
          </h1>

          {/* File Input with Upload Icon Inside */}
          <label className="relative block md:w-[20%] lg:w-[20%] rounded-2xl">
            <Input
              type="file"
              accept="application/pdf"
              className="pl-10 border border-gray-300 p-2 rounded-xl cursor-pointer bg-white px-5 pb-2"
            />
            <Upload
              size={17}
              className="absolute top-1/2 left-55 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </label>
        </section>
     
      </div>
      <div className="flex flex-col gap-6 lg:ml-6">
        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-2">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="text-muted-foreground text-sm">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
