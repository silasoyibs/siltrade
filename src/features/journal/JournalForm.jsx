import { useForm, Controller } from "react-hook-form";
import { IoIosClose, IoMdSearch } from "react-icons/io";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

import { BsCurrencyDollar } from "react-icons/bs";
import FormDatepicker from "../../ui/FormDatePicker";
import Select from "react-select";
import InputBox from "../../ui/InputBox.Jsx";
import { calculateRiskReward, formatJournalDate } from "../../utils/helpers";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";

function JournalForm({ handleCloseModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setValue, watch, handleSubmit, reset, register, control } = useForm({
    defaultValues: {
      tradeType: "Long",
    },
  });
  const tradeType = watch("tradeType");
  const entry = watch("entry");
  const exit = watch("exit");
  const stopLoss = watch("stopLoss");

  const tradeStatus = [
    { value: "win", label: "win" },
    { value: "loss", label: "loss" },
  ];
  useEffect(() => {
    if (!entry || !exit || !stopLoss) return;

    setIsLoading(true); // show loader
    setValue("riskToReward", ""); // clear old value while loading

    const timer = setTimeout(() => {
      const calculated = calculateRiskReward(entry, exit, stopLoss);
      setValue("riskToReward", calculated || "");
      setIsLoading(false); // hide loader
    }, 500); // debounce time

    return () => clearTimeout(timer);
  }, [entry, exit, stopLoss, setValue]);

  function onSubmit(data) {
    const formattedDate = formatJournalDate(data.date);

    reset();
    console.log({
      ...data,
      date: formattedDate,
    });
  }

  return (
    <Card className={`w-full max-w-[45rem]`}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium">Add New Trade</span>
        <button onClick={handleCloseModal}>
          <IoIosClose className="text-4xl" />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 grid-rows-[repeat(4,_auto)] gap-5 p-5">
          <div>
            <label className="block">Trade Type</label>
            <div className="!my-0 flex h-10 rounded-lg bg-[rgba(239,239,239,0.5)] px-1 py-0.5">
              <Button
                type="button"
                onClick={() => setValue("tradeType", "Long")}
                className={`!my-0 !cursor-default !p-0 py-5 ${tradeType === "Long" ? "!bg-primary-500" : "!text-gray !bg-transparent !font-medium"}`}
              >
                Long
              </Button>
              <Button
                type="button"
                onClick={() => setValue("tradeType", "Short")}
                className={`!my-0 !cursor-default !p-0 py-5 ${tradeType === "Short" ? "!bg-primary-500" : "!text-gray !bg-transparent !font-medium"}`}
              >
                Short
              </Button>
            </div>
          </div>
          <div>
            <label className="block">Entry Price</label>
            <div className="relative">
              <InputBox
                type="numeric"
                icon={
                  <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                }
                inputPlaceholder={"0.00"}
                id="entry-price"
                {...register("entry", { valueAsNumber: true })}
              />
            </div>
          </div>
          <div>
            <label className="block" htmlFor="Outcome">
              Status
            </label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  value={tradeStatus.find(
                    (option) => option.value === field.value,
                  )}
                  onChange={(selected) => field.onChange(selected.value)}
                  options={tradeStatus}
                  placeholder="Select Status"
                  classNames={{
                    control: ({ isFocused }) =>
                      `!w-full !rounded-lg !border-[1.5px] !border-[rgba(0,0,0,0.2)] !px-9 !pl-2 ${isFocused ? "!ring-[1.5px] !ring-primary !outline-none !border-hidden" : ""}`,
                    option: ({ isFocused, isSelected }) =>
                      `cursor-pointer transition-all duration-200 rounded-md ${
                        isFocused
                          ? "!bg-primary-100 !text-primary"
                          : "text-black"
                      } ${
                        isSelected
                          ? "!bg-transparent !text-primary"
                          : "text-black"
                      }`,
                  }}
                />
              )}
            />
          </div>
          <div>
            <label className="block">Exit Price</label>
            <div className="relative">
              <InputBox
                icon={
                  <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                }
                inputPlaceholder={"0.00"}
                {...register("exit", { valueAsNumber: true })}
              />
            </div>
          </div>
          <div>
            <Controller
              control={control}
              name="date"
              defaultValue={new Date()}
              render={({ field }) => <FormDatepicker {...field} />}
            />
          </div>
          <div>
            <label className="block">R:R Ratio</label>
            <div className="relative">
              <InputBox
                inputPlaceholder={"1:5"}
                type="text"
                className={`bg-[#f7f7f7] pl-2 placeholder:text-left focus:!hidden`}
                readOnly
                {...register("riskToReward")}
              />
              {isLoading && (
                <div className="absolute top-[-16px] right-0">
                  <Loader />
                </div>
              )}
            </div>
            <p className="text-gray font-medium">
              Auto-calculate based on entry and exist price
            </p>
          </div>
          <div>
            <label className="block">Trading Pair</label>
            <div className="relative">
              <InputBox
                type="text"
                icon={
                  <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                }
                inputPlaceholder={"e.g., BTC/USD"}
                id="entry-price"
                {...register("pair")}
              />
            </div>
          </div>
          <div>
            <label className="block">Stop Loss</label>
            <div className="relative">
              <InputBox
                icon={
                  <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                }
                inputPlaceholder={"0.00"}
                {...register("stopLoss", { valueAsNumber: true })}
              />
            </div>
          </div>
          <div className="col-span-full">
            <label className="block">Trade Reason</label>
            <div>
              <InputBox
                inputPlaceholder={"Why did you take this trade?"}
                id="entry-price"
                type="text"
                className="w-full pb-30 pl-2 placeholder:text-left"
                {...register("notes")}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end rounded-b-lg bg-[rgba(239,239,239,0.5)]">
          <div className="flex w-full max-w-[20rem] gap-3 p-3">
            <Button
              className="border-1 border-[rgba(0,0,0,0.2)] bg-transparent !text-gray-500"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <Button type="submit">Save Trade</Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default JournalForm;
