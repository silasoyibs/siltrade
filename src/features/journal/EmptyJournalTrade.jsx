import noTradeSvg from "../../assets/no-trade.svg";

function EmptyJournalTrade() {
  return (
    <div className="flex flex-col items-center py-5 text-center">
      <img src={noTradeSvg} className="mb-5 h-30" />
      <span className="font-bold dark:text-white">No trades yet</span>
      <p className="dark:text-dark-mode text-sm">
        Start by adding your first trade to see your performance here. Track
        your wins, losses, and analyze your trading patterns.
      </p>
    </div>
  );
}

export default EmptyJournalTrade;
