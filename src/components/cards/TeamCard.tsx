import React from 'react';
import Image from 'next/image'
import { twMerge } from 'tailwind-merge';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    imagePath: string;
    alt: string;
    role: string;
    className?: string;
}

const TeamCard = ({name, imagePath, className, alt, role }: Props) => {
    
  return (
    <div className={twMerge(
        `text-[#FEF6EB] min-w-[268px] h-[462px] flex flex-col rounded-[20px] pl-6 pt-6 overflow-hidden`, className
      )}>
        <div>
            <p className="font-lostaMasta text-[32px]">{name}</p>
            <p className="text-2xl pr-6">{role}</p>
        </div>
        <div className="flex-grow"></div>
        <div className="w-full flex justify-center">
            <Image
            src={imagePath}
            alt={alt}
            width={244}
            height={283}
            className="w-full h-auto object-contain"
            priority
            />
        </div>
    </div>

);
};

export default TeamCard;
