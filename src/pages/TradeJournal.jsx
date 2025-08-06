import NewTrade from "../features/journal/NewTrade";
import TradesJournalTable from "../features/journal/TradesJournalTable";

function TradeJournal() {
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="mb-7 text-lg font-medium"> Trade Performance</p>
        <TradesJournalTable />
      </div>
    </div>
  );
}

export default TradeJournal;
