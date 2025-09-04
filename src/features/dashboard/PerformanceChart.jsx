import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useWeeklyWinRate } from "./useWinRatePerformanceChart";
import { useEffect } from "react";

let data = [];
// const data = [
//   { name: "Jan", pv: 62 },
//   { name: "Feb", pv: 58 },
//   { name: "Mar", pv: 65 },
//   { name: "Apr", pv: 70 },
//   { name: "May", pv: 68 },
//   { name: "Jun", pv: 72 },
//   { name: "Jul", pv: 66 },
//   { name: "Aug", pv: 75 },
//   { name: "Sep", pv: 71 },
//   { name: "Oct", pv: 74 },
//   { name: "Nov", pv: 69 },
//   { name: "Dec", pv: 73 },
// ];

function PerformanceChart() {
  const { weeklyWinrate } = useWeeklyWinRate();
  data = weeklyWinrate?.map((data) => ({
    name: data.day,
    winrate: data.wins > 0 ? (data.wins / data.totaltrades) * 100 : 0,
  }));

  useEffect(() => {
    console.log(weeklyWinrate, data);
  }, [weeklyWinrate]);
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
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />

          <CartesianGrid strokearray="4 4" stroke="#E5E7EB" vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="winrate"
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
