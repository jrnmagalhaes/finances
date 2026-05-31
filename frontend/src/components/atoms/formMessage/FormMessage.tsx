
const FormMessage = ({ message }: { message?: string }) => {
  return (
    <p className="color-error">
      {message}
    </p>
  );
};

export { FormMessage };
