import { useForm, Controller } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { BsCurrencyDollar } from "react-icons/bs";
import FormDatepicker from "../../ui/FormDatePicker";
import Select from "react-select";
import InputBox from "../../ui/InputBox.Jsx";
import {
  calculateRiskReward,
  formatJournalTradeDate,
} from "../../utils/helpers";
import { useEffect } from "react";
// import Loader from "../../ui/Loader";
import { useCreateTrade } from "./useCreateTrade";
import { useJournal } from "../../contexts/JournalContext";

function JournalForm({ handleCloseModal }) {
  // const [isLoading, setIsLoading] = useState(false);
  const { createNewTrade, isCreating } = useCreateTrade();
  const { id: editTradeId, ...editValues } = useJournal().journal || {};
  const isEditingSession = editTradeId;
  const { setValue, watch, handleSubmit, reset, register, control } = useForm({
    defaultValues: isEditingSession
      ? editValues
      : {
          type: "Long",
        },
  });
  const type = watch("type");
  const entry = watch("entry");
  const exit = watch("exit");
  const stopLoss = watch("stopLoss");

  const tradeStatus = [
    { value: "Win", label: "win" },
    { value: "Loss", label: "loss" },
  ];
  useEffect(() => {
    if (!entry || !exit || !stopLoss) return;

    // setIsLoading(true); // show loader
    setValue("riskToReward", ""); // clear old value while loading

    const timer = setTimeout(() => {
      const calculated = calculateRiskReward(entry, exit, stopLoss);
      setValue("riskToReward", calculated || "");
      // setIsLoading(false); // hide loader
    }, 500); // debounce time

    return () => clearTimeout(timer);
  }, [entry, exit, stopLoss, setValue]);

  function onSubmit(data) {
    // const formattedDate = formatJournalTradeDate(data.date);
    const formattedDate = data.date;

    createNewTrade(
      {
        ...data,
        date: formattedDate,
      },
      {
        onSuccess: () => {
          reset();
          handleCloseModal();
        },
      },
    );
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
                onClick={() => setValue("type", "Long")}
                className={`!my-0 !cursor-default !p-0 py-5 ${type === "Long" ? "!bg-primary-500" : "!text-gray !bg-transparent !font-medium"}`}
                disabled={isCreating}
              >
                Long
              </Button>
              <Button
                type="button"
                onClick={() => setValue("type", "Short")}
                className={`!my-0 !cursor-default !p-0 py-5 ${type === "Short" ? "!bg-primary-500" : "!text-gray !bg-transparent !font-medium"}`}
                disabled={isCreating}
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
            <FormDatepicker control={control} name="date" />
          </div>
          <div>
            <label className="block">R:R Ratio</label>
            <div className="relative">
              <InputBox
                inputPlaceholder={"1:5:1"}
                type="text"
                className={`bg-[#f7f7f7] pl-2 placeholder:text-left focus:!hidden`}
                readOnly
                {...register("riskToReward")}
                disabled={isCreating}
              />
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
                disabled={isCreating}
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
                disabled={isCreating}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end rounded-b-lg bg-[rgba(239,239,239,0.5)]">
          <div className="flex w-full max-w-[20rem] gap-3 p-3">
            <Button
              className="border-1 border-[rgba(0,0,0,0.2)] bg-transparent !text-gray-500"
              onClick={handleCloseModal}
              disabled={isCreating}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isCreating}>
              {isEditingSession ? "Edit Trade" : "Save Trade"}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default JournalForm;
