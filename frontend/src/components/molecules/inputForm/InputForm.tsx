import { FormMessage, Input, type InputProps } from "../../atoms";
import { useFormContext } from "react-hook-form";

const InputForm = ({ label, placeholder, ...props }: InputProps) => {
  const { getFieldState, formState } = useFormContext();
  const { error } = getFieldState(props.name!, formState);
  return (
    <div>
      <Input label={label} placeholder={placeholder} {...props} />
      <FormMessage message={error?.message} />
    </div>
  );
};

export { InputForm };
