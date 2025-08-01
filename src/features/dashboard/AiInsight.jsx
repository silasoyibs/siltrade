import { FaRobot } from "react-icons/fa";
import Card from "../../ui/Card";
import AiInsightBox from "./AiInsightBox";
import { FaLightbulb } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { TbGraphFilled } from "react-icons/tb";
import Button from "../../ui/Button";
import { FaWandMagicSparkles } from "react-icons/fa6";

function AiInsight() {
  return (
    <Card>
      <div className="bg-primary-100 flex gap-4 rounded-t-lg p-5">
        <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
          <FaRobot className="text-2xl text-white" />
        </span>
        <div>
          <p className="text-lg font-medium">AI Insights </p>
          <p className="text-gray text-md">Based on your recent trades</p>
        </div>
      </div>
      <div className="p-5 pb-0">
        <AiInsightBox
          icon={<FaLightbulb className="text-primary mt-1 text-xl" />}
          tittle="Pattern Recognition"
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu  "
        />
        <AiInsightBox
          icon={<IoWarning className="mt-1 text-xl text-yellow-400" />}
          tittle="Risk Management"
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu  "
        />
        <AiInsightBox
          icon={<TbGraphFilled className="mt-1 text-xl text-green-500" />}
          tittle="Performance Insights"
          body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu "
        />
        <Button>
          <FaWandMagicSparkles className="text-white" />
          Get Detailed AI Analysis
        </Button>
      </div>
    </Card>
  );
}

export default AiInsight;
