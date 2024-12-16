"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    // <div className="w-full flex justify-center">
      <button onClick={onClick} className={className}>
        {children}
      </button>
    // </div>
  );
};

export default Button;
