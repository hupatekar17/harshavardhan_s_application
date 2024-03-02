import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[15px]",
  lg: "text-lg font-normal",
  s: "text-[15px] font-normal leading-4",
  "2xl": "text-2xl font-normal",
  xl: "text-xl font-normal leading-5",
  md: "text-base font-normal leading-[150%]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue-50 font-proximanova ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
