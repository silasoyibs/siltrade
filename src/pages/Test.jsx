function Test() {
  return (
    <div className="gap:5 lg:grid-cols-[minmax(800px,1fr) grid h-full grid-cols-2 items-center justify-center">
      <div className="overflow-x-auto">
        <div className="w-[800px] bg-red-500">testing</div>
      </div>
      <div>
        <div className="bg-red-500">testing</div>
      </div>
    </div>
  );
}

export default Test;
