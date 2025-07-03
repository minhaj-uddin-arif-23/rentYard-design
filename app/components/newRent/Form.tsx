"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function Form() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openModal, setOpenModal] = useState(false);

  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });
  const [sameAddress, setSameAddress] = useState(true);
  const handleAddClick = (title: string, description: string) => {
    setModalContent({ title, description });
    setOpenModal(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">🏠 RentYard</span>
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            Save & Exit
          </Button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Condominiums information</h2>
      <div className="space-y-6">
        {/* Required Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-red-600">
              Property address (Required)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter address" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Property Address",
                        "Add detailed property address information including street, city, state, and ZIP code."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                    <div className=" bg-white rounded-xl shadow-md space-y-6">
                      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {/* Property Name */}
                        <div className="space-y-1">
                          <Label htmlFor="property-name">
                            Property name as identifier
                          </Label>
                          <Input
                            id="property-name"
                            placeholder="Dallas apartments complex"
                            required
                          />
                        </div>

                        {/* Total Apartment Units */}
                        <div className="space-y-1">
                          <Label htmlFor="units">Total apartment unit</Label>
                          <Input
                            id="units"
                            type="number"
                            placeholder="50"
                            required
                          />
                        </div>

                        {/* Property Website (optional) */}
                        <div className="space-y-1 col-span-1 sm:col-span-2">
                          <Label htmlFor="website">
                            Property website (optional)
                          </Label>
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://"
                          />
                        </div>

                        {/* Country */}
                        <div className="space-y-1">
                          <Label htmlFor="country">Country/Region</Label>
                          <Select>
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Choose country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="bd">Bangladesh</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              {/* Add more as needed */}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* State/Territory */}
                        <div className="space-y-1">
                          <Label htmlFor="state">State/Territory</Label>
                          <Select>
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Choose state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tx">Texas</SelectItem>
                              <SelectItem value="ca">California</SelectItem>
                              <SelectItem value="ny">New York</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* City */}
                        <div className="space-y-1">
                          <Label htmlFor="city">City/Town</Label>
                          <Input id="city" placeholder="Dallas" required />
                        </div>

                        {/* Zip Code */}
                        <div className="space-y-1">
                          <Label htmlFor="zip">Zip code</Label>
                          <Input id="zip" placeholder="75061" required />
                        </div>

                        {/* Street Address */}
                        <div className="space-y-1 col-span-1 sm:col-span-2">
                          <Label htmlFor="street">Street address</Label>
                          <Input
                            id="street"
                            placeholder="111 Austin Ave"
                            required
                          />
                        </div>

                        {/* Apt / Suite */}
                        <div className="space-y-1 col-span-1 sm:col-span-2">
                          <Label htmlFor="apt">
                            Apt, suite, unit (if applicable)
                          </Label>
                          <Input id="apt" placeholder="123" />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-1 sm:col-span-2 text-right">
                          <Button type="submit">Add</Button>
                        </div>
                      </form>
                    </div>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button
                    onClick={() => setOpenModal(false)}
                    className="mt-4 bg-white"
                  >
                    {/* Close */}
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">
              Leasing info (Required)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter leasing info" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Leasing Info",
                        "Provide leasing terms, duration, and any special conditions."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
                      <h2 className="text-xl font-semibold">Leasing Info</h2>

                      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Leasing Manager Name */}
                        <div className="space-y-1">
                          <Label htmlFor="manager-name">
                            Leasing manager name
                          </Label>
                          <Input
                            id="manager-name"
                            placeholder="Alex Johan"
                            required
                          />
                        </div>

                        {/* Leasing Manager Phone */}
                        <div className="space-y-1">
                          <Label htmlFor="manager-phone">
                            Leasing manager phone number
                          </Label>
                          <div className="flex gap-2">
                            <div className="w-12 h-10 flex items-center justify-center border rounded-md bg-gray-50">
                              🇧🇩
                            </div>
                            <Input
                              id="manager-phone"
                              placeholder="+880"
                              required
                              className="flex-1"
                            />
                          </div>
                        </div>

                        {/* Leasing Manager Email */}
                        <div className="space-y-1 col-span-1 sm:col-span-2">
                          <Label htmlFor="manager-email">
                            Leasing manager email
                          </Label>
                          <Input
                            id="manager-email"
                            type="email"
                            placeholder="leasing@rentyard.com"
                            required
                          />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center space-x-2 col-span-1 sm:col-span-2">
                          <Checkbox
                            id="same-address"
                            checked={sameAddress}
                            onCheckedChange={(checked) =>
                              setSameAddress(Boolean(checked))
                            }
                          />
                          <Label htmlFor="same-address">
                            Address (same as property)
                          </Label>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-1 sm:col-span-2 text-right">
                          <Button type="submit">Add</Button>
                        </div>
                      </form>
                    </div>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">
              Charges (Required)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter charges" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => handleAddClick("Charges", "")}
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                    <div className="space-y-1 flex justify-between">
                      <div>
                        <Label htmlFor="state" className="my-4">
                          Application fee (one time)*
                        </Label>
                        <Select>
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Choose state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">
                              All 18+ applicant
                            </SelectItem>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="ny">New York</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div>
                          <h1>Admin fee (one-time)</h1>
                          <Input type="number" placeholder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p>Type 0 if charges not applicable </p>
                      <Button className="bg-blue-500 text-white ">Add</Button>
                    </div>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  {/* <Button onClick={() => setOpenModal(false)} className="mt-4"> */}
                  {/* Close */}
                  {/* </Button> */}
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-red-600">
              Rent frequency & payment reminder (Required)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter rent details" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Rent Frequency & Payment Reminder",
                        "Specify rent frequency (e.g., monthly) and payment reminder details."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Optional Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pet fees (Optional, add fees if you allow pet)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter pet fees" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Pet Fees",
                        "Add pet-related fees or policies if pets are allowed."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parking (Optional)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter parking info" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Parking",
                        "Provide details about parking availability and costs."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nearest educational institution (Optional but recommended)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter institution" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Nearest Educational Institution",
                        "Mention the closest school, college, or university."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nearest stations (Optional but recommended)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter station info" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Nearest Stations",
                        "List nearby public transport stations (e.g., train, bus)."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nearest landmark (Optional but recommended)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter landmark" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Nearest Landmark",
                        "Highlight a notable nearby landmark (e.g., park, mall)."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Utilities provider (Optional but recommended)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter provider" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => handleAddClick("Utilities Provider", "")}
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                    <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
                      {/* Utility Type */}
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="utilityType">
                          Utility type <span className="text-red-500">*</span>
                        </Label>
                        <Select>
                          <SelectTrigger id="utilityType">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">
                              All 18+ applicant
                            </SelectItem>
                            <SelectItem value="framework">Framework</SelectItem>
                            <SelectItem value="library">Library</SelectItem>
                            <SelectItem value="class">Class</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Provider Name */}
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="providerName">
                          Provider company name{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input id="providerName" placeholder="Enter name" />
                      </div>
                    </div>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button className="bg-blue-500 text-white">Add</Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application agreement (Optional)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter agreement details" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Application Agreement",
                        "Add terms or conditions for the application process."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              About the property (Optional)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter property details" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "About the Property",
                        "Provide a brief description of the property."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Community&#39;s amenity/features (Optional but recommended)
            </label>
            <div className="flex items-center mt-1">
              <Input placeholder="Enter amenities" className="flex-1" />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() =>
                      handleAddClick(
                        "Community's Amenity/Features",
                        "List community features like gym, pool, or security."
                      )
                    }
                    className="ml-2 text-blue-600 hover:underline"
                  >
                    + Add
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-gray-600">{modalContent.description}</p>
                  <Button onClick={() => setOpenModal(false)} className="mt-4">
                    Close
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Property gallery (It&#39;s not unit photo)*
          </label>
          <div className="mt-4 grid grid-cols-4 gap-4">
            <div className="border-2 border-dashed border-blue-500 h-24 flex items-center justify-center bg-gray-50 rounded">
              <span className="text-blue-500 text-sm">
                Upload cover photo (.jpg, .png)
              </span>
            </div>
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-blue-500 h-24 flex items-center justify-center bg-gray-50 rounded"
              >
                <span className="text-blue-500 text-sm">Upload photo</span>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Videos (optional)
          </label>
          <div className="mt-1">
            <Input placeholder="Upload video" className="w-full" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button variant="outline">Back</Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
