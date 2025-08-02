import { IoIosClose, IoMdSearch } from "react-icons/io";
import Card from "./Card";
import Button from "./Button";
import InputBox from "./InputBox.Jsx";
import { BsCalendarDate, BsCurrencyDollar } from "react-icons/bs";
import { useForm } from "react-hook-form";
function NewTrade() {
  const { setValue, watch } = useForm({
    defaultValues: {
      tradeType: "Long",
    },
  });
  const tradeType = watch("tradeType");

  return (
    <div className="h-full bg-[rgba(0,0,0,0.1] py-15">
      <Card className={`w-full max-w-[50rem]`}>
        <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
          <span className="text-lg font-medium">Add New Trade</span>
          <button>
            <IoIosClose className="text-4xl" />
          </button>
        </div>
        <form>
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
                  icon={
                    <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                  }
                  inputPlaceholder={"0.00"}
                  id="entry-price"
                />
              </div>
            </div>
            <div>
              <label className="block" htmlFor="Outcome">
                Status
              </label>
              <select
                id="outcome"
                className="focus:ring-primary display:block right-1 w-full rounded-lg border-[1.5px] border-[rgba(0,0,0,0.2)] px-9 py-2.5 pl-2 focus:border-hidden focus:ring-[1.5px] focus:outline-none"
              >
                <option value="Select Outcome">Select Outcome</option>
                <option value="Win">Win</option>
                <option value="Loss">Loss</option>
              </select>
            </div>
            <div>
              <label className="block">Exit Price</label>
              <div className="relative">
                <InputBox
                  icon={
                    <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                  }
                  inputPlaceholder={"0.00"}
                />
              </div>
            </div>
            <div>
              <label className="block">Date</label>
              <div className="relative">
                <InputBox
                  icon={
                    <BsCalendarDate className="absolute bottom-[13px] left-2 text-lg text-black" />
                  }
                  inputPlaceholder={"08/01/2025"}
                  id="entry-price"
                  className="placeholder:font-normal placeholder:text-black"
                />
              </div>
            </div>
            <div>
              <label className="block">R:R Ratio</label>
              <div className="relative">
                <InputBox
                  inputPlaceholder={"1:5:1"}
                  className={`bg-[#f7f7f7] pl-2 placeholder:text-left`}
                  disabled={true}
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
                  icon={
                    <BsCurrencyDollar className="text-gray absolute bottom-[12px] left-2 text-lg" />
                  }
                  inputPlaceholder={"e.g., BTC/USD"}
                  id="entry-price"
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
                />
              </div>
            </div>
            <div className="col-span-full">
              <label className="block">Trade Reason</label>
              <div>
                <InputBox
                  inputPlaceholder={"Why did you take this trade?"}
                  id="entry-price"
                  inputType="text"
                  className="w-full pb-30 pl-2 placeholder:text-left"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end rounded-b-lg bg-[rgba(239,239,239,0.5)]">
            <div className="flex w-full max-w-[20rem] gap-3 p-3">
              <Button className="border-1 border-[rgba(0,0,0,0.2)] bg-transparent !text-gray-500">
                Cancel
              </Button>
              <Button>Save Trade</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewTrade;
