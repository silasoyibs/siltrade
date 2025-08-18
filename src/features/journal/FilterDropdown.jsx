import Select, { components } from "react-select";

const CustomControl = ({ children, ...props }) => {
  const { selectProps } = props;
  const Icon = selectProps.icon; // 👈 get icon from props
  return (
    <components.Control {...props}>
      {Icon && (
        <span
          style={{ marginLeft: "8px", marginRight: "6px", color: "#7c3aed" }}
        >
          {Icon}
        </span>
      )}
      {children}
    </components.Control>
  );
};

function FilterDropdown({ options, placeholder, icon }) {
  return (
    <Select
      placeholder={placeholder}
      options={options}
      components={{ Control: CustomControl }}
      icon={icon}
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
