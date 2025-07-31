function Card({ children, className }) {
  return (
    <div className={`${className} rounded-lg bg-white shadow-md`}>
      {children}
    </div>
  );
}

export default Card;
// <div className="grid grid-cols-[70px_1fr] gap-x-2 gap-y-4 rounded-lg bg-white px-6 py-8 shadow-md">
