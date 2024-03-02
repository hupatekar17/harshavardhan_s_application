import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[3px]",
};
const variants = {
  fill: {
    gray_200: "bg-gray-200 text-gray-200",
    white_A700: "bg-white-A700 text-gray-200",
  },
  outline: {
    gray_200: "border-gray-200 border border-solid text-gray-200",
  },
};
const sizes = {
  sm: "h-[18px] w-[18px] pl-[15px] text-[13px]",
  xs: "h-[15px] w-[15px] pl-3.5 text-[13px]",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      shape = "round",
      variant = "outline",
      size = "xs",
      color = "gray_200",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center justify-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_200", "white_A700"]),
};

export { CheckBox };
