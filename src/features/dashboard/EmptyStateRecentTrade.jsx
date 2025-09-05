import { IoMdAddCircle } from "react-icons/io";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import noTradeSvg from "../../assets/no-trade.svg";

function EmptyStateRecentTrade() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-5 text-center">
      <img src={noTradeSvg} className="mb-5 h-30" />
      <span className="font-bold dark:text-white">No trades yet</span>
      <p className="dark:text-dark-mode text-sm">
        Start by adding your first trade to see your performance here. Track
        your wins, losses, and analyze your trading patterns.
      </p>
      <Button
        className={`w-full: max-w-[200px]`}
        onClick={() => navigate("/journal")}
      >
        <IoMdAddCircle />
        Add Your First Trade
      </Button>
    </div>
  );
}

export default EmptyStateRecentTrade;
