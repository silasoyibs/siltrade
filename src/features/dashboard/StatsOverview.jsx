import {
  IoMdAdd,
  IoMdArrowUp,
  IoMdTrendingDown,
  IoMdTrendingUp,
} from "react-icons/io";
import StatsBox from "./StatsBox";
import { IoStatsChart } from "react-icons/io5";
import { LuScale } from "react-icons/lu";
import { useTrades } from "../journal/useTrades";
import {
  calculateAverageRR,
  calculateLossRate,
  calculateTotalTrades,
  calculateWinRate,
} from "../../utils/helpers";

function StatsOverview() {
  const { trades, isPending } = useTrades();
  const { overallWinrate, monthlyWinrate } = calculateWinRate(trades);
  const { overallLossrate, monthlyLossrate } = calculateLossRate(trades);
  const { overallTotalTrades, monthlyTotalTrades } =
    calculateTotalTrades(trades);
  const { overallAverageRR, monthlyAverageRR } = calculateAverageRR(trades);
  return (
    <div className="grid grid-cols-4 gap-x-5">
      <StatsBox
        rateName="Win Rate"
        rateTotalPercentage={`${overallWinrate}%`}
        rateMonthlyPercentage={`${monthlyWinrate}%`}
        iconTotal={<IoMdTrendingUp className="text-2xl font-bold" />}
        iconMonthly={<IoMdArrowUp className="text-xl font-semibold" />}
        Color="bg-green-100  text-green-500"
        isPending={isPending}
      />
      <StatsBox
        rateName="Loss Rate"
        rateTotalPercentage={`${overallLossrate}%`}
        rateMonthlyPercentage={`${monthlyLossrate}%`}
        iconTotal={<IoMdTrendingDown className="text-2xl font-bold" />}
        iconMonthly={<IoMdArrowUp className="text-xl font-semibold" />}
        Color="bg-red-100  text-red-500"
        isPending={isPending}
      />
      <StatsBox
        rateName="Total trades"
        rateTotalPercentage={overallTotalTrades}
        rateMonthlyPercentage={monthlyTotalTrades}
        iconTotal={<IoStatsChart className="text-2xl font-bold" />}
        iconMonthly={<IoMdAdd className="text-xl font-semibold" />}
        Color="bg-blue-100  text-blue-500"
        isPending={isPending}
      />
      <StatsBox
        rateName="Average R:R"
        rateTotalPercentage={`${overallAverageRR}:1`}
        rateMonthlyPercentage={`${monthlyAverageRR}:1`}
        iconTotal={<LuScale className="text-2xl font-bold" />}
        iconMonthly={<IoMdArrowUp className="text-xl font-semibold" />}
        Color="bg-primary-100  text-primary-500"
        isPending={isPending}
      />
    </div>
  );
}

export default StatsOverview;
