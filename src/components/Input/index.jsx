import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-tl-[50px] rounded-bl-[50px]",
};
const variants = {
  outline: {
    blue_gray_600_blue_gray_600_00: "border border-solid blue_gray_600_blue_gray_600_00_border text-white-A700",
  },
};
const sizes = {
  xs: "h-12 pl-[23px] pr-[35px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "outline",
      size = "xs",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-white-A700 rounded-tl-[50px] rounded-bl-[50px] tracking-[2.00px] uppercase text-base font-light border border-solid blue_gray_600_blue_gray_600_00_border ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["blue_gray_600_blue_gray_600_00"]),
};

export { Input };
