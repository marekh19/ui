import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="text-3xl bg-emerald-300 text-stone-900 rounded-lg px-4 py-2"
    >
      {children}
    </button>
  );
};

export default Button;
