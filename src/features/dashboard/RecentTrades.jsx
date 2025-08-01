import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import RecentTradeList from "./RecentTradeList";

function RecentTrades() {
  return (
    <Card className={"h-min"}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium">Recent Trades</span>
        <NavLink to="/journal" className={"text-primary font-medium"}>
          View All
        </NavLink>
      </div>
      <div className="text-gray grid grid-cols-6 gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] bg-[#f7f7f7] px-5 py-3">
        <span>TYPE</span>
        <span>DATE</span>
        <span>PAIR</span>
        <span>ENTRY/EXIT</span>
        <span className="justify-self-center">R:R</span>
        <span>RESULT</span>
      </div>

      <RecentTradeList
        type="Long"
        date="jul 29,2023"
        pair="BTC/USD"
        entry="29,450/30,120"
        rr="2:1:1"
        result={2.27}
      />
      <RecentTradeList
        type="Short"
        date="jul 29,2023"
        pair="ETH/USD"
        entry="29,450/30,120"
        rr="2:1:1"
        result={2.27}
      />
      <RecentTradeList
        type="Long"
        date="jul 29,2023"
        pair="BTC/USD"
        entry="29,450/30,120"
        rr="2:1:1"
        result={2.27}
      />
      <RecentTradeList
        type="Long"
        date="jul 29,2023"
        pair="BTC/USD"
        entry="29,450/30,120"
        rr="2:1:1"
        result={2.27}
      />
      <RecentTradeList
        type="Short"
        date="jul 29,2023"
        pair="ADA/USD"
        entry="29,450/30,120"
        rr="2:1:1"
        result={2.27}
      />
    </Card>
  );
}

export default RecentTrades;
