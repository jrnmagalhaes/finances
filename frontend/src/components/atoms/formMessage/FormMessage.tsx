
const FormMessage = ({ message }: { message?: string }) => {
  return (
    <p className="text-txt-error">
      {message}
    </p>
  );
};

export { FormMessage };
