import Card from "../../ui/Card";

function StatsBoxSkeleton() {
  return (
    <Card>
      <div className="grid animate-pulse grid-cols-[70px_1fr] gap-x-2 gap-y-4 px-6 py-8">
        {/* Left icon placeholder */}
        <span className="flex h-15 w-15 items-center justify-center rounded-lg bg-gray-300" />

        {/* Rate name + total percentage */}
        <div>
          <div className="mb-2 h-4 w-24 rounded bg-gray-300" />
          <div className="h-6 w-16 rounded bg-gray-300" />
        </div>

        {/* Monthly percentage placeholder */}
        <span className="flex h-6 w-full items-center justify-center rounded-lg bg-gray-300" />

        {/* "this month" text placeholder */}
        <div className="h-4 w-20 rounded bg-gray-300" />
      </div>
    </Card>
  );
}

export default StatsBoxSkeleton;
