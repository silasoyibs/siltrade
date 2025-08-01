import Card from "../../ui/Card";
import PerformanceChart from "./PerformanceChart";

function PerformanceTrends() {
  return (
    <Card className={`mt-5`}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium">Performance Trends</span>{" "}
        <div className="flex items-center justify-center gap-5">
          <span className="text-primary-500 bg-primary-100 flex max-w-15 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium">
            Week
          </span>
          <span className="text-gray text-sm font-medium">Month</span>
          <span className="text-gray text-sm font-medium">Year</span>
        </div>
      </div>
      <PerformanceChart />
    </Card>
  );
}

export default PerformanceTrends;
