// import { useEffect } from "react";
// import { getAiInsight } from "../services/apiAiInsight";

import { getTrades } from "../services/apiTrades";

function Test() {
  return console.log(getTrades(2, 4));
}

export default Test;
