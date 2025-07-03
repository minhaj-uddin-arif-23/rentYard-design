"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function LeasingInfoModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "Alex Johan",
    phone: "+880",
    email: "leasing@rentyard.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Leasing info</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Leasing manager name *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Leasing manager Phone number *
            </label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Leasing manager email *
          </label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-700">
            Address (same as property)
          </label>
        </div>
        <Button
          onClick={onClose}
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
        >
          Add
        </Button>
      </div>
    </DialogContent>
  );
}
