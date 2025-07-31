import AiInsight from "../features/dashboard/AiInsight";
import StatsOverview from "../features/dashboard/StatsOverview";

function Dashboard() {
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="mb-7 font-medium"> Key Stats Overview</p>
        <StatsOverview />
      </div>
      <div className="grid grid-cols-[1fr_20rem] gap-5">
        <div className="h-full w-full">recent trades</div>
        <AiInsight />
      </div>
    </div>
  );
}

export default Dashboard;
