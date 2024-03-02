import React from "react";

const sizes = {
  s: "text-xl font-bold",
  xs: "text-base font-bold leading-[21px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-proximanova ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
