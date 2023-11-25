"use client";

import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#eeeeee] hover:bg-[#b4b4b4] font-medium py-2 px-4 text-black rounded w-full md:w-auto"
    >
      {children}
    </button>
  );
};

export default Button;
