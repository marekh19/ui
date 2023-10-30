import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export default Button;
