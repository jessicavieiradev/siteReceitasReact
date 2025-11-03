import React from "react";

interface TitleProps extends React.ComponentPropsWithoutRef<"h2"> {
  as?: "h1" | "h2" | "h3";
}

const baseStyles = "font-extrabold text-primary font-primary";

const Title: React.FC<TitleProps> = ({
  as: Element = "h2",
  className = "",
  children,
  ...rest
}) => {
  return (
    <Element className={`${baseStyles} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

export default Title;
