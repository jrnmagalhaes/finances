
const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`px-6 py-8 rounded-2xl bg-accent-bg ${className}`}>
      {children}
    </div>
  );
};

export { Card };
