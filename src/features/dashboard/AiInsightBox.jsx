function AiInsightBox({ tittle, body, icon }) {
  return (
    <div className="mb-5 flex gap-3 rounded-lg bg-[#f7f7f7] p-5">
      <span>{icon}</span>
      <div>
        <span className="font-semibold">{tittle}</span>
        <p className="text-gray">{body}</p>
      </div>
    </div>
  );
}

export default AiInsightBox;
