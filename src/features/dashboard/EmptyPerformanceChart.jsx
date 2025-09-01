import noPerformanceChartSvg from "../../assets/performanceChart.svg";

function EmptyPerformanceChart() {
  return (
    <div className="flex flex-col items-center py-5 text-center">
      <img className="mb-5 h-30" src={noPerformanceChartSvg} />
      <span className="font-bold dark:text-white">
        Your performance trends will appear here
      </span>
      <p className="dark:text-dark-mode text-sm">
        Start trading to see your progress over time
      </p>
    </div>
  );
}

export default EmptyPerformanceChart;
