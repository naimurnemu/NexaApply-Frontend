import React from "react";

const Button = ({
  children,
  onClick,
  className,
  style,
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-amber-300 block text-white font-semibold py-2 px-4 rounded ${className}`}
      style={style}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
