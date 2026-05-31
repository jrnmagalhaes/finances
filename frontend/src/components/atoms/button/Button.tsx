
type ButtonProps = {
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "small" | "medium" | "large" | "icon";
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ title = "", onClick = () => { }, type = "button", variant = "primary", size = "medium", disabled = false, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        ${variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
        ${variant === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : ""}
        ${variant === "danger" ? "bg-red-500 text-white hover:bg-red-600" : ""}
        ${variant === "ghost" ? "bg-transparent text-gray-500 hover:bg-gray-500/10" : ""}
        ${size === "small" ? "px-2 py-1" : ""}
        ${size === "medium" ? "px-4 py-2" : ""}
        ${size === "large" ? "px-6 py-3" : ""}
        ${size === "icon" ? "p-1" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        [&_svg]:w-4 [&_svg]:h-4
        hover:cursor-pointer
        rounded
        ${className}
      `}
    >
      {children} {title}
    </button>
  );
};

export { Button };
