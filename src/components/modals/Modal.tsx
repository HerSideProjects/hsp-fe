"use client"

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ModalClosed } from '../../../public/assets/icons/ModalClosed';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export const Modal = ({children, className, onClose} : Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div onClick={handleClose} className={`fixed w-full h-screen z-[100] bg-black/40 top-0 left-0 flex justify-center items-center ${!isOpen && 'hidden'}`}>
        <div onClick={e => e.stopPropagation()} className={twMerge("absolute bg-[#FEF6EB] rounded-2xl border border-[#EF3187] shadow-[0_0_15px_rgba(0,0,0,0.1)] w-fit flex flex-col md:py-5 md:px-5 px-3 py-3 max-w-5/6 md:max-w-full", className)}>
            <button onClick={handleClose} className="self-end">
              <ModalClosed />
            </button>
            <div className="flex flex-col text-center items-center gap-4 px-3">
                {children}
            </div>
        </div>
    </div>
  )
}