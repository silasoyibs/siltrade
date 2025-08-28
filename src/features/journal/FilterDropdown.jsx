import { useSearchParams } from "react-router-dom";
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

function FilterDropdown({ options, placeholder, icon, paramKey, onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(selected) {
    const searchValue = selected.value;

    if (paramKey) {
      searchParams.set(paramKey, searchValue);
      setSearchParams(searchParams);
    }
    setSearchParams(searchParams);

    // 👇 forward value to parent if provided
    if (onChange) {
      onChange(searchValue);
    }
  }
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
          `!w-full !rounded-lg !border-[1.5px] !border-[rgba(0,0,0,0.2)] dark:!bg-dark-shade ${isFocused ? "!ring-[1.5px] !ring-primary !outline-none !border-hidden" : ""}`,
        option: ({ isFocused, isSelected }) =>
          `cursor-pointer transition-all duration-200 rounded-md ${
            isFocused
              ? "!bg-primary-100 !text-primary dark:!bg-dark-purple-shade"
              : "text-black dark:!text-[rgba(255,255,255,0.5)]"
          } ${isSelected ? "!bg-transparent !text-primary " : "text-black"}`,

        menu: () => `dark:!bg-dark-bg`,
        singleValue: () => `dark:!text-[rgba(255,255,255,0.5)]`,
      }}
      onChange={(selected) => {
        handleClick(selected);
      }}
    />
  );
}

export default FilterDropdown;
