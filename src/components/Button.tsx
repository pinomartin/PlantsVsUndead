import React from "react";
interface ButtonProps {
  backColor?: string;
  fontColor?: string;
  onClick: () => void;
  label: string;
  cssAddOn?: string;
}
const Button = ({ onClick, backColor = '', label, fontColor= '', cssAddOn = '' }: ButtonProps) => {
  return (
    <button
      className={`pushable ${cssAddOn}`}
      onClick={onClick}
    >
      <span className="front"  style={{ backgroundColor: backColor, color: fontColor}}>{label}</span>
    </button>
  );
};

export default Button;
