import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
} from "recharts";

const data = [
  {
    name: "Mon",
    pv: 2400,
  },
  {
    name: "Tue",
    pv: 1398,
  },
  {
    name: "Wed",
    pv: 9800,
  },
  {
    name: "Thur",
    pv: 3908,
  },
  {
    name: "Fri",
    pv: 4800,
  },
  {
    name: "Sat",
    pv: 3800,
  },
  {
    name: "Sun",
    pv: 4300,
  },
];

function PerformanceChart() {
  return (
    <AreaChart width={600} height={250} data={data}>
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="100%" stopColor="#e5d8fb" stopOpacity={0.8} />
          <stop offset="100%" stopColor="#e5d8fb" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />

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
  );
}

export default PerformanceChart;
