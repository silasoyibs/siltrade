import Card from "../../ui/Card";
import StatsBoxSkeleton from "./StatsBoxSkeleton";

function StatsBox({
  rateName,
  rateTotalPercentage,
  rateMonthlyPercentage,
  iconTotal,
  iconMonthly,
  Color,
  isPending,
}) {
  if (isPending) return <StatsBoxSkeleton />;
  return (
    <Card className="grid grid-cols-[70px_1fr] gap-x-2 gap-y-4 px-6 py-8">
      <span
        className={`${Color} flex h-15 w-15 items-center justify-center rounded-lg`}
      >
        {iconTotal}
      </span>
      <div>
        <p className="text-md font-semibold text-[#6b7280]">{rateName}</p>
        <p className="text-xl font-bold dark:text-white">{`${rateTotalPercentage}`}</p>
      </div>

      <span
        className={`${Color} flex w-full items-center justify-center rounded-lg text-sm font-bold`}
      >
        {iconMonthly}
        {`${rateMonthlyPercentage}`}
      </span>

      <p className="text-md font-semibold text-[#6b7280]">this month</p>
    </Card>
  );
}

export default StatsBox;
