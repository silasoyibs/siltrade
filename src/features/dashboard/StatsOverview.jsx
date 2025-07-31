import {
  IoMdAdd,
  IoMdArrowUp,
  IoMdTrendingDown,
  IoMdTrendingUp,
} from "react-icons/io";
import StatsBox from "./StatsBox";
import { IoStatsChart } from "react-icons/io5";
import { LuScale } from "react-icons/lu";

function StatsOverview() {
  return (
    <div className="grid grid-cols-4 gap-x-5">
      <StatsBox
        rateName="Win Rate"
        rateTotalPercentage={`${67.47}%`}
        rateMonthlyPercentage={`${2.1}%`}
        iconTotal={<IoMdTrendingUp className="text-2xl font-bold" />}
        iconMonthly={<IoMdArrowUp className="text-xl font-semibold" />}
        Color="bg-green-100  text-green-500"
      />
      <StatsBox
        rateName="Loss Rate"
        rateTotalPercentage={`${32.6}%`}
        rateMonthlyPercentage={`${0.8}%`}
        iconTotal={<IoMdTrendingDown className="text-2xl font-bold" />}
        iconMonthly={<IoMdArrowUp className="text-xl font-semibold" />}
        Color="bg-red-100  text-red-500"
      />
      <StatsBox
        rateName="Total trades"
        rateTotalPercentage={67.47}
        rateMonthlyPercentage={2.1}
        iconTotal={<IoStatsChart className="text-2xl font-bold" />}
        iconMonthly={<IoMdAdd className="text-xl font-semibold" />}
        Color="bg-blue-100  text-blue-500"
      />
      <StatsBox
        rateName="Average R:R"
        rateTotalPercentage={181}
        rateMonthlyPercentage={0.1}
        iconTotal={<LuScale className="text-2xl font-bold" />}
        iconMonthly={<IoMdArrowUp className="text-xl font-semibold" />}
        Color="bg-primary-100  text-primary-500"
      />
    </div>
  );
}

export default StatsOverview;
