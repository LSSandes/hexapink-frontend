"use client";
import React from "react";
interface InputFieldProps {
  title: string;
  placeholder: string;
  type: string;
}
const InputField: React.FC<InputFieldProps> = ({ type, title, placeholder }) => {
  return (
    <div className="lg:w-[300px] w-full">
      <div className="relative mt-2 w-full">
        <input
          id={title}
          name={title}
          type={type}
          placeholder={placeholder}
          className="peer block w-full bg-transparent px-3 py-1.5 text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-[16px] font-[raleway-medium] tracking-wider"
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-6 text-[14px] font-[raleway-semibold] text-gray-900 transition-colors peer-focus:text-pink-500 tracking-wider"
        >
          {title}
        </label>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-pink-500"
        />
      </div>
    </div>
  );
};

export default InputField;
