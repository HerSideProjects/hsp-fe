import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  placeholder?: string;
  error?: string;
}

const TextField = ({ error, label, className, placeholder, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
        <p className="font-lostaMasta">{label}</p>
        <div>
        <input className="bg-[#FFF0DC] border w-full p-[10px] rounded-lg" type="text" placeholder={placeholder}/>
        {error && (
          <p className="text-[10px] absolute">{error}</p>
        )}
        </div>
    </div>
);
};

export default TextField;
