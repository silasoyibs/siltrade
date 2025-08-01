import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Mon", pv: 60 },
  { name: "Tue", pv: 55 },
  { name: "Wed", pv: 58 },
  { name: "Thur", pv: 63 },
  { name: "Fri", pv: 66 },
  { name: "Sat", pv: 70 },
  { name: "Sun", pv: 72 },
];

function PerformanceChart() {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6B7280" }} // Tailwind: text-gray-500
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />

          <CartesianGrid
            strokearray="4 4"
            stroke="#E5E7EB" // Tailwind: gray-200
            vertical={false}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#7c3aed"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;
