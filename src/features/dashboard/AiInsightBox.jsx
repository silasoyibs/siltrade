function AiInsightBox({ tittle, body, icon, isPending }) {
  return (
    <div className="mb-5 flex gap-3 rounded-lg bg-[#f7f7f7] p-5">
      <span>{icon}</span>
      <div>
        <span className="font-semibold">{tittle}</span>
        {isPending ? (
          <>
            <div className="mt-2 h-4 w-40 animate-pulse rounded bg-gray-300"></div>
            <div className="mt-2 h-4 w-40 animate-pulse rounded bg-gray-300"></div>
            <div className="mt-2 h-4 w-40 animate-pulse rounded bg-gray-300"></div>
            <div className="mt-2 h-4 w-25 animate-pulse rounded bg-gray-300"></div>
          </>
        ) : (
          <p className="text-gray">{body}</p>
        )}
      </div>
    </div>
  );
}

export default AiInsightBox;
