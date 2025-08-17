import { BsFillFilterCircleFill } from "react-icons/bs";
import Select, { components } from "react-select";
const CustomControl = (props) => (
  <components.Control {...props}>
    <span style={{ marginLeft: "8px", marginRight: "6px", color: "#555" }}>
      <BsFillFilterCircleFill />
    </span>
    {props.children}
  </components.Control>
);

function FilterDropdown({ options }) {
  return (
    <Select
      options={options}
      defaultValue={options[0]} // "All"
      components={{ Control: CustomControl }}
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: "6px",
          paddingLeft: "4px",
        }),
      }}
      classNames={{
        control: ({ isFocused }) =>
          `!w-full !rounded-lg !border-[1.5px] !border-[rgba(0,0,0,0.2)]  ${isFocused ? "!ring-[1.5px] !ring-primary !outline-none !border-hidden" : ""}`,
        option: ({ isFocused, isSelected }) =>
          `cursor-pointer transition-all duration-200 rounded-md ${
            isFocused ? "!bg-primary-100 !text-primary" : "text-black"
          } ${isSelected ? "!bg-transparent !text-primary" : "text-black"}`,
      }}
    />
  );
}

export default FilterDropdown;
