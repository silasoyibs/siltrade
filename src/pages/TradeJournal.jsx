import { JournalContextProvider } from "../contexts/JournalContext";
import Filter from "../features/journal/Filter";
import TradesJournalTable from "../features/journal/TradesJournalTable";

function TradeJournal() {
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="mb-7 text-lg font-medium"> Trade Performance</p>
        <JournalContextProvider>
          <Filter />
          <TradesJournalTable />
        </JournalContextProvider>
      </div>
    </div>
  );
}

export default TradeJournal;
