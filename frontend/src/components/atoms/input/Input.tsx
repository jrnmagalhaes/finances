import { useId } from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  name?: string;
  className?: string;
}

const Input = ({ label, placeholder, value, onChange, type, className, name }: InputProps) => {
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
      />
    </div>
  );
};

export { Input };
