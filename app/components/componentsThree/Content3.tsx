"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, FileArchive, FileSignature } from "lucide-react";

export function Content3() {
  return (
    <div className="p-6 space-y-10">
      {/* Section 1: Info Box */}
      <section>
        <div className="border-2 border-gray-300 bg-gray-100 text-gray-700 p-4 rounded-xl">
          <h1 className="text-gray-500 font-medium">Realtor Verification</h1>
        </div>
      </section>

      {/* Section 2: PDF Uploads */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upload 1 */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">
              Upload Ownership Document (PDF)
            </h1>
            <label className="relative block w-full">
              <Input
                type="file"
                accept="application/pdf"
                className="pl-10 border border-gray-300 p-2 rounded-xl cursor-pointer bg-white"
              />
              <FileText
                size={15}
                className="absolute top-6 left-46 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </label>
          </div>

          {/* Upload 2 */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">
              Additional Documents for Realtor
            </h1>
            <label className="relative block w-full">
              <Input
                type="file"
                accept="application/pdf"
                className="pl-10 border border-gray-300 p-2 rounded-xl cursor-pointer bg-white"
              />
              <FileArchive
                size={15}
                className="absolute top-6 left-48 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </label>
          </div>

          {/* Upload 3 */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Agreement with Landlord*</h1>
            <label className="relative block w-full">
              <Input
                type="file"
                accept="application/pdf"
                className="pl-10 border border-gray-300 p-2 rounded-xl cursor-pointer bg-white"
              />
              <FileSignature
                size={15}
                className="absolute top-6 left-48 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Section 3: Terms & Conditions */}
      <section>
        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" defaultChecked />
          <div className="grid gap-1">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <p className="text-sm text-muted-foreground">
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
