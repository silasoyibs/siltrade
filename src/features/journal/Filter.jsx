import { FaCalendarDay } from "react-icons/fa";
import FilterTag from "../../ui/FilterTag";
import FilterDropdown from "./FilterDropdown";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { useState } from "react";

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

  function handleFilterValue(filtervaluetype, filtervalue) {
    setSelectedFilters((prevfiltervalue) => ({
      ...prevfiltervalue,
      [filtervaluetype]: filtervalue,
    }));
  }

  function handleRemoveFilterTag(filtertype) {
    setSelectedFilters((prevVal) => ({ ...prevVal, [filtertype]: null }));
  }

  return (
    <div className="mb-7 flex items-center justify-between">
      <div className="flex max-w-[700px] items-center">
        <span className="mr-4 text-xl">Filters</span>
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

      <div className="flex gap-2">
        {selectedFilters.date && (
          <FilterTag
            tagText={selectedFilters.date}
            className="bg-purple-100 text-purple-600"
            onClick={() => handleRemoveFilterTag("date")}
          />
        )}
        {selectedFilters.status && selectedFilters.status !== "All" && (
          <FilterTag
            tagText={
              selectedFilters.status === "Win" ? "Wins Only" : "Losses Only"
            }
            className={` ${selectedFilters.status === "Win" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
            onClick={() => handleRemoveFilterTag("status")}
          />
        )}
      </div>
    </div>
  );
}

export default Filter;
