"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  // onClick?: () => void;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <div>
      <button onClick={() => console.log("clicked")} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
