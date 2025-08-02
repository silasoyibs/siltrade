function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-primary my-4 flex w-full items-center justify-center gap-2 rounded-xl py-2 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
