"use client";
import React, { useState } from "react";
import { SelectArrowIcon } from "../../../public/assets/icons/SelectArrowIcon";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  options: Option[];
  placeholder?: string;
  error?: string;
  onChange?: (selected: string) => void;
  value?: string;
}

export const SelectField = ({
  options,
  value = "",
  placeholder = "Pick one",
  error,
  onChange,
}: SelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="relative flex w-full rounded-lg border bg-[#FFF0DC] p-[10px] text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-[#1C1719]" : "text-[#646464]"}>
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </span>
        <span
          className={`transition-transform duration-300 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <SelectArrowIcon />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-[#FEF6EB] border border-[#1C1719] shadow-lg max-h-64 overflow-auto">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="px-4 py-2 hover:bg-[#FFF0DC] cursor-pointer"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1 text-right">{error}</p>}
    </div>
  );
};
