import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar3 } from "react-icons/bs";

function FormDatepicker() {
  const [startDate, setStartDate] = useState(new Date());

  // Wrap InputBox with forwardRef
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative w-full">
      <BsCalendar3 className="absolute bottom-[13px] left-2 text-lg text-black" />
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
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
    <div>
      <label className="mb-1 block">Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
}

export default FormDatepicker;
