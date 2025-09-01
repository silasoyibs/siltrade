import AiSvg from "../../assets/Ai.svg";

function EmptyStateAiInsight() {
  return (
    <div className="flex flex-col items-center py-5 text-center">
      <img className="mb-5 h-30" src={AiSvg} />
      <span className="font-bold dark:text-white">
        AI insights will be generated once you have trading history
      </span>
      <p className="dark:text-dark-mode text-sm">
        Our AI will analyze your trading patterns, identify opportunities for
        improvement, and provide personalized recommendations.
      </p>
    </div>
  );
}

export default EmptyStateAiInsight;
