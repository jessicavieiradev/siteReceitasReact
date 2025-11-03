import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children}: ParagraphProps) => {
  return <p className="font-primary text-primary text-[18px]">{children}</p>;
};

export default Paragraph;
