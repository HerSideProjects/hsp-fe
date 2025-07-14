"use client";

import React, { useEffect, useRef, useState } from "react";
import { UploadIcon } from "../../../public/assets/icons/UploadIcon";

type MediaFieldProps = {
  onFileSelect: (file: File | null) => void;
  placeholder?: string;
  file?: File | null;
};

export const MediaField: React.FC<MediaFieldProps> = ({ onFileSelect, placeholder, file }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  useEffect(() => {
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
      if (inputRef.current) {
        inputRef.current.value = ""; // Clear input file secara manual
      }
    }
  }, [file]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    } else {
      setFileName("");
      onFileSelect(null);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-lostaMasta">Payment Evidence</p>
      <div>
        <p>Join us for just <span className="font-bold">IDR 85,000</span>, including all your materials for the flower pipe cleaner craft! </p>
        <p>Complete your registration by transferring the payment to:</p>
      </div>
      <p className="mt-3">BANK JAGO: 506270040328 ( KAISA DIAN FERDINAND )</p>

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className="flex justify-between bg-[#FFF0DC] border border-[#1C1719] p-[10px] rounded-lg cursor-pointer"
      >
        <p className="text-[#646464] truncate">
          {fileName || placeholder}
        </p>
        <UploadIcon />
      </div>
    </div>
  );
};
