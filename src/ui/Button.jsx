function Button({ children }) {
  return (
    <button className="bg-primary w-100% my-4 flex w-full items-center justify-center gap-2 rounded-xl py-2 text-white">
      {children}
    </button>
  );
}

export default Button;
