import { useId, type InputHTMLAttributes } from "react";

export type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, placeholder, value, onChange, type, className, name, ...props }: InputProps) => {
  const id = useId();
  return (
    <div className={`space-y-2 ${className} w-full`}>
      <label htmlFor={name ?? id} className="block">{label}</label>
      <input
        className="border rounded px-2 py-1 w-full"
        name={name ?? id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export { Input };
