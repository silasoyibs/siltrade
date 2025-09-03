function SpinnerMini({ className }) {
  return (
    <div
      className={`${className} h-7 w-7 animate-spin rounded-full border-2 border-white border-t-transparent`}
    />
  );
}

export default SpinnerMini;
