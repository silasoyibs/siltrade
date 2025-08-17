import Button from "../../ui/Button";
import FilterTag from "../../ui/FilterTag";
import FilterDropdown from "./FilterDropdown";
// import { useState } from "react";

function Filter() {
  const options = [
    { value: "All", label: "All" },
    { value: "Win", label: "Win" },
    { value: "Loss", label: "Loss" },
  ];

  return (
    <div className="mb-7 flex items-center justify-between">
      <div className="flex max-w-[700px] items-center">
        <span className="mr-4 text-xl">Filters</span>
        <div className="flex items-center gap-4">
          <FilterDropdown options={options} />
          <FilterDropdown options={options} />
        </div>
      </div>

      <div className="flex gap-2">
        <FilterTag
          tagText="Last 30 Days"
          className={`bg-primary-100 text-primary`}
        />
        <FilterTag
          tagText="Wins Only"
          className={`bg-green-100 text-green-500`}
        />
      </div>
    </div>
  );
}

export default Filter;
