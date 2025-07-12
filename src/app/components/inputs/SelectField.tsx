"use client";
import React, { useState } from "react";
import { SelectArrowIcon } from "../../../../public/assets/icons/SelectArrowIcon";
import { SelectCloseIcon } from "../../../../public/assets/icons/SelectCloseIcon";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  options: Option[];
  placeholder?: string;
  error?: string;
  onChange?: (selected: string[]) => void;
}

export const SelectField = ({options, placeholder = "Pick ur interest (can multiply)", error, onChange}: SelectFieldProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (value: string) => {
    let newSelected = [...selected];
    if (!selected.includes(value)) {
        newSelected = [...selected, value]
    }

    setSelected(newSelected);
    console.log("Selected values:", newSelected);
    setIsOpen(!isOpen)
    onChange?.(newSelected);
  };

  const handleRemoveInterest = (value: string) => {
    const newSelected = selected.filter((item) => item !== value);
    setSelected(newSelected);
    console.log("Selected after removal:", newSelected);
    onChange?.(newSelected);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="relative flex w-full rounded-lg border bg-[#FFF0DC] p-[10px] text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#646464]">{placeholder}</span>
        <span className={`transition-transform duration-300 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isOpen ? 'rotate-180' : ''}`}>
          <SelectArrowIcon />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white border border-gray-300 shadow-lg max-h-64 overflow-auto">
          {options.map((opt) => (
            <label
                key={opt.value}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                <input
                    type="checkbox"
                    checked={selected.includes(opt.value)}
                    onChange={() => handleToggle(opt.value)}
                    className="hidden"
                />
                <span>{opt.label}</span>
            </label>

          ))}
        </div>
      )}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 max-w-80">
        {selected.map((category, index) => (
        <div key={index} className="bg-[#E2F1AE] text-[#1C1719] p-2 rounded-lg border border-[#1C1719] w-fit text-xs">
            <div className="flex gap-1 justify-between items-center">
            <p>{category}</p>
            <div onClick={() => handleRemoveInterest(category)} className="cursor-pointer">
                <SelectCloseIcon/>
            </div>
            </div>
        </div>
        ))}
        </div>
        )}

      {error && <p className="text-red-500 text-sm mt-1 text-right">{error}</p>}
    </div>
  );
};
