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
        `text-[#FEF6EB] md:min-w-[268px] min-w-[168px] md:h-[462px] h-[322px] flex flex-col rounded-[20px] pl-6 pt-6 overflow-hidden`, className
      )}>
        <div>
            <p className="font-lostaMasta md:text-[32px] text-2xl">{name}</p>
            <p className="md:text-2xl pr-6">{role}</p>
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
