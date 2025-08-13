import { useTrades } from "../features/journal/useTrades";

function Test() {
  const { trades, isPending } = useTrades();
  console.log(trades, isPending);
  return <div>test</div>;
}

export default Test;
