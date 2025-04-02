import React from "react";
import { cn } from "../../../lib/utils";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  btnType?: "filled" | "outline" | "flattened" | "icon"; 
}

const Button: React.FC<ButtonProps> = ({ className, btnType = "filled", children, ...props }) => {
  return (
    <button className={cn(`btn-${btnType}`, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;

