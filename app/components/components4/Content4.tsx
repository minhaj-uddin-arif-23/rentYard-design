"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function Content4() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
    } else {
      setFileName("Only PDF allowed");
    }
  };
  return (
    <div className="p-6 space-y-10">
      {/* Section 1: Info Box */}
      <section>
        <div className="border-2 border-gray-300 bg-gray-100 text-gray-700 p-4 rounded-xl w-11/12 ml-10 ">
          <h1 className="text-gray-500 font-medium">Company & office info</h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div>
            <Label>Company name*</Label>
            <Input placeholder="Runyan trade center" />
          </div>

          <div>
            <Label>Company Identifier (EIN/TIN)*</Label>
            <Input placeholder="Name" />
          </div>

          <div>
            <Label>Your job title*</Label>
            <Input placeholder="Manager" />
          </div>

          <div>
            <Label>Agreement with landlord/owner (PDF only)*</Label>
            <Input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            {fileName && (
              <p className="text-sm mt-1 text-muted-foreground">{fileName}</p>
            )}
          </div>

          {/* Row 2 */}
          <div>
            <Label>Country/Region*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BD">Bangladesh</SelectItem>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="IN">India</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Street address*</Label>
            <Input placeholder="111 Austin Ave" />
          </div>

          <div>
            <Label>Apt, suit, unit (if applicable)</Label>
            <Input placeholder="3050" />
          </div>

          <div>
            <Label>Phone number*</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md text-sm bg-muted text-muted-foreground">
                🇧🇩 +880
              </span>
              <Input
                type="tel"
                className="rounded-l-none"
                placeholder="1XXXXXXXXX"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <Label>Contact email*</Label>
            <Input type="email" placeholder="majarul2025@gmail.com" />
          </div>

          <div>
            <Label>City/Town*</Label>
            <Input placeholder="Dallas" />
          </div>

          <div>
            <Label>State/Territory*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TX">Texas</SelectItem>
                <SelectItem value="CA">California</SelectItem>
                <SelectItem value="NY">New York</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Zip code*</Label>
            <Input placeholder="75061" />
          </div>

          {/* Submit Button (optional) */}
          <div className="md:col-span-2 text-right">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
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
