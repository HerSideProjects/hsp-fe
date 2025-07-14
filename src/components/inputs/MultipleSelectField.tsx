"use client";
import React, { useState } from "react";
import { SelectArrowIcon } from "../../../public/assets/icons/SelectArrowIcon";
import { SelectCloseIcon } from "../../../public/assets/icons/SelectCloseIcon";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  options: Option[];
  placeholder?: string;
  error?: string;
  onChange?: (selected: string[]) => void;
  values?: string[];
}

export const MultipleSelectField = ({
  options,
  values = [],
  placeholder = "Pick your interest (can multiply)",
  error,
  onChange,
}: SelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (value: string) => {
    const isSelected = values.includes(value);
    const newSelected = isSelected
      ? values.filter((v) => v !== value)
      : [...values, value];
     setIsOpen(false)
     setSearchTerm("");
    onChange?.(newSelected);
  };

  const handleRemoveInterest = (value: string) => {
    const newSelected = values.filter((v) => v !== value);
    onChange?.(newSelected);
  };

  const handleAddCustomOption = () => {
    const trimmed = searchTerm.trim();
    if (trimmed && !values.includes(trimmed.toLowerCase())) {
      onChange?.([...values, trimmed]);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !values.includes(opt.value)
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCustomOption();
    }
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="relative flex w-full rounded-lg border bg-[#FFF0DC] p-[10px] text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#646464]">{placeholder}</span>
        <span
          className={`transition-transform duration-300 ease-in-out absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <SelectArrowIcon />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-[#FEF6EB] border border-[#1C1719] shadow-lg max-h-64 overflow-auto p-2 space-y-2">
          <input
            type="text"
            placeholder="Type to search"
            className="w-full border px-3 py-2 rounded text-sm focus:outline-none bg-[#FFF0DC]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 px-3 py-2 hover:bg-[#FFF0DC] cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={values.includes(opt.value)}
                  onChange={() => handleToggle(opt.value)}
                  className="hidden"
                />
                <span>{opt.label}</span>
              </label>
            ))
          ) : (
            <div
              onClick={handleAddCustomOption}
              className="cursor-pointer text-sm text-[#EF3187] hover:underline px-3 py-2"
            >
              Add "<strong>{searchTerm}</strong>"
            </div>
          )}
        </div>
      )}

      {values.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {values.map((val, index) => (
            <div
              key={index}
              className="bg-[#E2F1AE] text-[#1C1719] p-2 rounded-lg border border-[#1C1719] w-fit text-xs"
            >
              <div className="flex gap-1 justify-between items-center">
                <p>{val}</p>
                <div
                  onClick={() => handleRemoveInterest(val)}
                  className="cursor-pointer"
                >
                  <SelectCloseIcon />
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
