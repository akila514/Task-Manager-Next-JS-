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
      className="bg-[#242424] hover:bg-[#3b3b3b] font-medium py-2 px-4 text-white rounded w-full md:w-auto"
    >
      {children}
    </button>
  );
};

export default Button;
