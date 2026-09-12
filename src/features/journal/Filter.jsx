import { FaCalendarDay } from "react-icons/fa";
import FilterTag from "../../ui/FilterTag";
import FilterDropdown from "./FilterDropdown";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { getTrades } from "../../services/apiTrades";
import { downloadTradesCsv } from "../../utils/exportCsv";

function Filter() {
  const tradeStatusOption = [
    { value: "All", label: "All" },
    { value: "Win", label: "Win" },
    { value: "Loss", label: "Loss" },
  ];
  const dateOption = [
    { value: "This month", label: "This month" },
    { value: "Last 30 days", label: "Last 30 days" },
    { value: "Last 90 days", label: "Last 90 days" },
  ];
  const [selectedFilters, setSelectedFilters] = useState({
    status: null,
    date: null,
  });
  const [exportingStatus, setExportingStatus] = useState(null);

  function handleFilterValue(filtervaluetype, filtervalue) {
    setSelectedFilters((prevfiltervalue) => ({
      ...prevfiltervalue,
      [filtervaluetype]: filtervalue,
    }));
  }

  function handleRemoveFilterTag(filtertype) {
    setSelectedFilters((prevVal) => ({ ...prevVal, [filtertype]: null }));
  }

  async function handleExport(status) {
    setExportingStatus(status);
    try {
      const trades = await getTrades({
        status,
        dateRange: selectedFilters.date,
      });
      downloadTradesCsv(trades, status);
    } finally {
      setExportingStatus(null);
    }
  }

  return (
    <div className="mb-7 flex items-center justify-between">
      <div className="flex max-w-[700px] items-center">
        <span className="mr-4 text-xl dark:text-[rgba(225,225,225,0.5)]">
          Filters
        </span>
        <div className="flex items-center gap-4">
          <FilterDropdown
            options={tradeStatusOption}
            placeholder="Trade Status"
            icon={<BsFillFilterCircleFill />}
            onChange={(filterValue) => handleFilterValue("status", filterValue)}
            paramKey={"trade-status"}
          />
          <FilterDropdown
            options={dateOption}
            icon={<FaCalendarDay />}
            onChange={(filterValue) => handleFilterValue("date", filterValue)}
            placeholder="Date"
            paramKey={"date-range"}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {[
          { status: "Win", label: "Export Wins" },
          { status: "Loss", label: "Export Losses" },
        ].map(({ status, label }) => (
          <button
            key={status}
            type="button"
            className="flex items-center gap-1 rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-wait disabled:opacity-50"
            onClick={() => handleExport(status)}
            disabled={exportingStatus !== null}
            title={`Download ${status.toLowerCase()} trades as CSV`}
          >
            <FiDownload />
            {exportingStatus === status ? "Exporting..." : label}
          </button>
        ))}
        {selectedFilters.date && (
          <FilterTag
            tagText={selectedFilters.date}
            className="dark:bg-dark-purple-shade bg-purple-100 text-purple-600"
            onClick={() => handleRemoveFilterTag("date")}
          />
        )}
        {selectedFilters.status && selectedFilters.status !== "All" && (
          <FilterTag
            tagText={
              selectedFilters.status === "Win" ? "Wins Only" : "Losses Only"
            }
            className={` ${selectedFilters.status === "Win" ? "dark:bg-dark-green-shade bg-green-100 text-green-600" : "dark:bg-dark-red-shade bg-red-100 text-red-600"}`}
            onClick={() => handleRemoveFilterTag("status")}
          />
        )}
      </div>
    </div>
  );
}

export default Filter;
