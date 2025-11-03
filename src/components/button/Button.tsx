import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



const Button = ({ children, className="", onClick }: ButtonProps) => {
  const baseClasses = "bg-primary text-white px-4 p-2 rounded-md font-primary font-bold hover:bg-secondary transition-colors duration-300 cursor-pointer";
  const finalClasses = `${baseClasses} ${className}`
  return <button className={finalClasses} onClick={onClick}>{children}</button>;
};

export default Button;
