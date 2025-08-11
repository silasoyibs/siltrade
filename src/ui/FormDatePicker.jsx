import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar3 } from "react-icons/bs";

function FormDatepicker({ control, name, defaultValue = new Date() }) {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative w-full">
      <BsCalendar3 className="absolute bottom-[13px] left-2 text-lg text-black" />
      <input
        type="text"
        placeholder="08/01/2025"
        className="focus:ring-primary hide-number-input w-full rounded-lg border-[1.5px] border-[rgba(0,0,0,0.2)] px-9 py-2 placeholder:font-normal placeholder:text-black focus:ring-[1.5px] focus:outline-none"
        onClick={onClick}
        value={value}
        readOnly
        ref={ref}
      />
    </div>
  ));

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue.toISOString().split("T")[0]} // store "YYYY-MM-DD"
      render={({ field }) => (
        <>
          <label className="mb-1 block">Date</label>
          <DatePicker
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) =>
              field.onChange(date ? date.toISOString().split("T")[0] : "")
            }
            customInput={<CustomInput />}
            dateFormat="MM/dd/yyyy"
          />
        </>
      )}
    />
  );
}

export default FormDatepicker;
