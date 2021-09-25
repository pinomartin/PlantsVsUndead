interface ButtonProps {
  backColor?: string;
  fontColor?: string;
  fontSize?: number;
  onClick: () => void;
  label: string;
  cssAddOn?: string;
}
const Button = ({ onClick, backColor = '', label, fontColor= '', cssAddOn = '', fontSize }: ButtonProps) => {
  return (
    <button
      className={`pushable ${cssAddOn}`}
      onClick={onClick}
    >
      <span className="front"  style={{ backgroundColor: backColor, color: fontColor, fontSize: fontSize}}>{label}</span>
    </button>
  );
};

export default Button;
