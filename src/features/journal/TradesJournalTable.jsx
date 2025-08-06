import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import TradeJournalList from "./TradeJournalList";
import Button from "../../ui/Button";
import { IoIosAdd, IoMdAddCircle } from "react-icons/io";

function TradesJournalTable() {
  return (
    <Card className={"h-min"}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium">All Trades</span>

        <Button className={"!my-0 max-w-35"}>
          {" "}
          <IoMdAddCircle />
          Addd Trade
        </Button>
      </div>
      <div className="text-gray grid grid-cols-10 justify-items-center gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] bg-[#f7f7f7] px-5 py-3 text-sm">
        <span>TYPE</span>
        <span>DATE</span>
        <span>PAIR</span>
        <span>ENTRY/EXIT</span>
        <span>STOPLOSS</span>
        <span>STATUS</span>
        <span> R:R</span>
        <span>RESULT</span>
        <span>NOTES</span>
        <span>ACTION</span>
      </div>

      <TradeJournalList
        type="Long"
        date="jul 29,2023"
        pair="BTC/USD"
        entry="29,450/30,120"
        stopLoss="29,000"
        status="Win"
        rr="2:1:1"
        result={2.27}
        notes={"dkdjddj"}
        iconType
        iconStatus
      />
    </Card>
  );
}

export default TradesJournalTable;
