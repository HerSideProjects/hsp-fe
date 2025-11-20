"use client";

import React from "react";

interface MattSelectorProps {
  value: "no" | "yes";                       
  onChange?: (value: "no" | "yes") => void;  
}

export const MattSelector = ({ value, onChange }: MattSelectorProps) => {
  const basePrice = 179000;
  const extraPrice = 30000;

  const total = value === "yes" ? basePrice + extraPrice : basePrice;

  return (
    <div
      className="bg-[#FEF6EB] rounded-xl p-5 border border-black/10"
      style={{ backgroundImage: "url('/assets/images/bg-select-matt.png')" }}
    >
      <p className="font-semibold mb-4">Please select this first</p>

      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <span
            className={`
              w-4 h-4 rounded-full border flex items-center justify-center
              ${value === "no" ? "border-black" : "border-gray-300 bg-gray-200"}
            `}
          >
            {value === "no" && (
              <span className="w-2 h-2 bg-black rounded-full" />
            )}
          </span>

          <input
            type="radio"
            name="mat"
            className="hidden"
            checked={value === "no"}
            onChange={() => onChange?.("no")}
          />

          <span>Bring my own matt</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <span
            className={`
              w-4 h-4 rounded-full border flex items-center justify-center
              ${value === "yes" ? "border-black" : "border-gray-300 bg-gray-200"}
            `}
          >
            {value === "yes" && (
              <span className="w-2 h-2 bg-black rounded-full" />
            )}
          </span>

          <input
            type="radio"
            name="mat"
            className="hidden"
            checked={value === "yes"}
            onChange={() => onChange?.("yes")}
          />

          <span>Additional Matt (+Rp 30,000)</span>
        </label>
      </div>

      <div className="border-t border-dashed border-gray-400 my-6"></div>

      <p className="text-right">
        Total = <span className="font-bold">Rp {total.toLocaleString("id-ID")}</span>
      </p>
    </div>
  );
};
