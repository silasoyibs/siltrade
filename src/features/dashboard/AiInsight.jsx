import { FaRobot } from "react-icons/fa";
import Card from "../../ui/Card";
import AiInsightBox from "./AiInsightBox";
import { FaLightbulb } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { TbGraphFilled } from "react-icons/tb";
import Button from "../../ui/Button";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useTrades } from "../journal/useTrades";
import { useAiInsight } from "./useAIInsight";
import EmptyStateAiInsight from "./EmptyStateAiInsight";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AiInsight() {
  const { trades } = useTrades();
  const { aiTradeInsight, isPending } = useAiInsight(trades);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(trades);
  }, [trades]);

  return (
    <Card className="flex flex-col">
      <div className="bg-primary-100 flex gap-4 rounded-t-lg p-5 dark:bg-[#2B3544]">
        <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
          <FaRobot className="text-2xl text-white" />
        </span>
        <div>
          <p className="text-lg font-medium dark:text-white">AI Insights </p>
          <p className="text-gray text-md">Based on your recent trades</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 pb-0">
        {/* Loading State */}
        {trades?.length === 0 && <EmptyStateAiInsight />}
        {/* Full data for ai insight */}
        {trades?.length > 0 && (
          <>
            <AiInsightBox
              icon={<FaLightbulb className="text-primary mt-1 text-xl" />}
              tittle="Pattern Recognition"
              isPending={isPending}
              body={aiTradeInsight?.patternRecognition}
            />
            <AiInsightBox
              icon={<IoWarning className="mt-1 text-xl text-yellow-400" />}
              tittle="Risk Management"
              isPending={isPending}
              body={aiTradeInsight?.performanceInsights}
            />
            <AiInsightBox
              icon={<TbGraphFilled className="mt-1 text-xl text-green-500" />}
              tittle="Performance Insights"
              isPending={isPending}
              body={aiTradeInsight?.riskManagement}
            />
            <Button
              className={`!mt-auto`}
              onClick={() => navigate("/insights")}
            >
              <FaWandMagicSparkles className="text-white" />
              Get Detailed AI Analysis
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}

export default AiInsight;
