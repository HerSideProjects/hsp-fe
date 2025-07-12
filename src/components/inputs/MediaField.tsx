"use client";

import React, { useRef, useState } from "react";
import { UploadIcon } from "../../../public/assets/icons/UploadIcon";

type MediaFieldProps = {
  onFileSelect: (file: File | null) => void;
  placeholder?: string;
};

export const MediaField: React.FC<MediaFieldProps> = ({ onFileSelect, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

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
      <p>For the payment you can transfer to BCA : 018239812312831 (Kaisa Dian)</p>

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
