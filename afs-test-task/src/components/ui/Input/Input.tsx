import React from "react";
import { cn } from "../../../lib/utils";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; 
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input className={cn(styles.input, className)} {...props}/>
  );
};

export default Input;
