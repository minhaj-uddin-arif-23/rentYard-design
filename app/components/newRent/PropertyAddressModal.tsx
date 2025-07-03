"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function PropertyAddressModal({ onClose }) {
  const [formData, setFormData] = useState({
    identifier: "Dallas apartments complex",
    totalUnits: "50",
    website: "https://",
    country: "",
    street: "111 Austin Ave",
    apt: "123",
    city: "Dallas",
    state: "",
    zip: "75061",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Property address</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Property name as identifier *</label>
            <Input
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enter property name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Total apartment unit *</label>
            <Input
              name="totalUnits"
              value={formData.totalUnits}
              onChange={handleChange}
              placeholder="Enter total units"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Property website (optional)</label>
            <Input
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Country/Region *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Choose country</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Street address *</label>
            <Input
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter street"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apt, suite, unit (if applicable)</label>
            <Input
              name="apt"
              value={formData.apt}
              onChange={handleChange}
              placeholder="Enter apt/suite"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">City/Town *</label>
            <Input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">State/Territory *</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Choose state</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Zip code *</label>
            <Input
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Enter zip"
            />
          </div>
        </div>
        <Button onClick={onClose} className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Add
        </Button>
      </div>
    </DialogContent>
  );
}