function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      {/* Header Row */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-6 justify-items-center gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] px-5 py-3"
        >
          <div className="h-6 w-16 rounded bg-gray-200"></div>
          <div className="h-6 w-20 rounded bg-gray-200"></div>
          <div className="h-6 w-16 rounded bg-gray-200"></div>
          <div className="h-6 w-24 rounded bg-gray-200"></div>
          <div className="h-6 w-10 rounded bg-gray-200"></div>
          <div className="h-6 w-14 rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
