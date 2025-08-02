function InputBox({ icon, inputType, inputPlaceholder, className, ...props }) {
  return (
    <>
      {icon}
      <input
        type={inputType}
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={inputPlaceholder}
        className={`focus:ring-primary hide-number-input right-1 w-full rounded-lg border-[1.5px] border-[rgba(0,0,0,0.2)] px-9 py-2 focus:border-hidden focus:ring-[1.5px] focus:outline-none ${className}`}
        {...props}
      />
    </>
  );
}

export default InputBox;
