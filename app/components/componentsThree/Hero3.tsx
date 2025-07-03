"use client";
import {
  Building2,
  Building,
  Home,
  User2,
  UserCog,
  Users,
} from "lucide-react";
import React from "react";

const propertyTypes = [
  {
    icon: <Home size={20} className="text-blue-600" />,
    title: "Single Home Property",
    desc: "Single unit house for one family",
  },
  {
    icon: <Building2 size={20} className="text-purple-600" />,
    title: "Apartment Complex",
    desc: "Multiple units for families",
  },
  {
    icon: <Building size={20} className="text-green-600" />,
    title: "Condominiums",
    desc: "Individually owned units in a complex",
  },
];

const roles = [
  {
    icon: <User2 size={20} className="text-yellow-600" />,
    title: "Landlord",
    desc: "Owner of the property",
  },
  {
    icon: <UserCog size={20} className="text-red-600" />,
    title: "Realtor",
    desc: "Manages property on owner's behalf",
  },
  {
    icon: <Users size={20} className="text-indigo-600" />,
    title: "Property Management Company",
    desc: "Third-party management service",
  },
];

export default function Hero3() {
  return (
    <div className="p-6 space-y-12 w-11/12 mx-auto">
      {/* Property Types */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Property Types</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertyTypes.map((item, index) => {
            const isCondo = item.title === "Condominiums";

            return (
              <div
                key={index}
                className={`border p-4 py-6 rounded-lg shadow-sm hover:shadow-md transition ${
                  isCondo
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                <div className="flex gap-6">
                  <div className="mt-5">{item.icon}</div>
                  <div>
                    <h2 className="text-lg font-semibold my-1">{item.title}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Roles */}
      <section>
        <h1 className="text-2xl font-bold mb-6">Select Your Role</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((item, index) => {
            const isLandlord = item.title === "Landlord";

            return (
              <div
                key={index}
                className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition ${
                  isLandlord
                    ? "border-blue-600 bg-blue-50"
                    : "border-blue-400 bg-white"
                }`}
              >
                <div className="flex gap-6">
                  <div className="mt-5">{item.icon}</div>
                  <div>
                    <h2 className="text-lg font-semibold my-1">{item.title}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
