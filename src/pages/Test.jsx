<<<<<<< Updated upstream
import Spinner from "../ui/Spinner";

function Test() {
  return <Spinner />;
=======
import { createNewTrade } from "../services/apiTrades";
import Button from "../ui/Button";

function Test() {
  return (
    <Button
      onClick={() =>
        createNewTrade({
          entry: 1233,
          exit: 3334,
          stopLoss: 3444,
          pair: "EUR/USD",
        })
      }
    >
      Submit
    </Button>
  );
>>>>>>> Stashed changes
}

export default Test;

// Default values shown
