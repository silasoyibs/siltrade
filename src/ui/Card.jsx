function Card({ children, className }) {
  return (
    <div
      className={`${className} dark:bg-dark-shade rounded-lg bg-white shadow-md`}
    >
      {children}
    </div>
  );
}

export default Card;
