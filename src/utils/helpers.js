import { parseISO, format } from "date-fns";

/**
 * Calculates the Risk-to-Reward ratio of a trade.
 *
 * @param {number} entryPrice - The price at which the trade is entered.
 * @param {number} existPrice - The target price to exit the trade with profit.
 * @param {number} stoploss - The price at which to exit the trade to prevent further loss.
 * @returns {string|undefined} - The risk-reward ratio formatted as "X:1", or undefined if risk is zero.
 *
 * @example
 * calculateRiskReward(100, 120, 90); // "2:1"
 */
export function calculateRiskReward(entryPrice, existPrice, stoploss) {
  const risk = Math.abs(entryPrice - stoploss);
  const reward = Math.abs(entryPrice - existPrice);
  if (risk === 0) return; // Avoid division by zero
  const ratio = reward / risk;
  return `${Math.round(ratio)}:1`;
}

/**
 * Calculates the result of a trade in percentage and determines whether it was a win or loss.
 *
 * @param {number} entryPrice - The price at which the trade is entered.
 * @param {number} existPrice - The price at which the trade was exited.
 * @param {number} stopLoss - The price set to minimize loss.
 * @param {string} tradeType - The type of trade: "Long" or "Short".
 * @returns {{ status: string, result: string }|undefined} - An object containing the status ("Win" or "Loss") and result percentage, or undefined if inputs are invalid.
 *
 * @example
 * calculateResult(100, 120, 90, "Long"); // { status: "Win", result: "20.00" }
 */
export function calculateResult(entryPrice, existPrice, stopLoss, tradeType) {
  if (!entryPrice || !existPrice || !stopLoss) return { result: null };

  let result = 0;
  let status = "Win";

  // LONG trade scenario
  if (tradeType === "Long") {
    if (existPrice <= stopLoss) {
      // Hit stoploss
      result = (((stopLoss - entryPrice) / entryPrice) * 100).toFixed(2);
      status = "Loss";
    } else {
      // Hit target profit
      result = (((existPrice - entryPrice) / entryPrice) * 100).toFixed(2);
      status = result > 0 ? "Win" : "Loss";
    }
  }

  // SHORT trade scenario
  if (tradeType === "Short") {
    if (existPrice >= stopLoss) {
      // Hit stoploss
      result = (((entryPrice - stopLoss) / entryPrice) * 100).toFixed(2);
      status = "Loss";
    } else {
      // Hit target profit
      result = (((entryPrice - existPrice) / entryPrice) * 100).toFixed(2);
      status = result > 0 ? "Win" : "Loss";
    }
  }

  return { status, result };
}

export function formatJournalTradeDate(dateString) {
  const date = parseISO(dateString);
  // "MMM dd, yyyy" → "Aug 15, 2025"
  return format(date, "MMM dd, yyyy");
}

// trader winrate (overall + this month)
export function calculateWinRate(trades) {
  if (!trades?.length) return { overallWinrate: 0, monthlyWinrate: 0 };

  // ---- Overall win rate ----
  const totalWins = trades.filter((trade) => trade.status === "Win").length;
  const overallWinrate = ((totalWins / trades.length) * 100).toFixed(1);

  // ---- Monthly win rate ----
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyTrades = trades.filter((trade) => {
    const tradeDate = new Date(trade.date);
    return (
      tradeDate.getMonth() === currentMonth &&
      tradeDate.getFullYear() === currentYear
    );
  });

  let monthlyWinrate = 0;
  if (monthlyTrades.length) {
    const monthlyWins = monthlyTrades.filter((t) => t.status === "Win").length;
    monthlyWinrate = ((monthlyWins / monthlyTrades.length) * 100).toFixed(1);
  }

  return { overallWinrate, monthlyWinrate };
}

// trader lossrate (overall + this month)
export function calculateLossRate(trades) {
  if (!trades?.length) return { overallLossrate: 0, monthlyLossrate: 0 };

  // ---- Overall loss rate ----
  const totalLosses = trades.filter((trade) => trade.status === "Loss").length;
  const overallLossrate = ((totalLosses / trades.length) * 100).toFixed(1);

  // ---- Monthly loss rate ----
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyTrades = trades.filter((trade) => {
    const tradeDate = new Date(trade.date);
    return (
      tradeDate.getMonth() === currentMonth &&
      tradeDate.getFullYear() === currentYear
    );
  });

  let monthlyLossrate = 0;
  if (monthlyTrades.length) {
    const monthlyLosses = monthlyTrades.filter(
      (t) => t.status === "Loss",
    ).length;
    monthlyLossrate = ((monthlyLosses / monthlyTrades.length) * 100).toFixed(1);
  }

  return { overallLossrate, monthlyLossrate };
}

// trader total trade
// trader total trades (overall + this month)
export function calculateTotalTrades(trades) {
  if (!trades?.length) return { overallTotalTrades: 0, monthlyTotalTrades: 0 };

  // ---- Overall total trades ----
  const overallTotalTrades = trades.length;

  // ---- Monthly total trades ----
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyTrades = trades.filter((trade) => {
    const tradeDate = new Date(trade.date);
    return (
      tradeDate.getMonth() === currentMonth &&
      tradeDate.getFullYear() === currentYear
    );
  });

  const monthlyTotalTrades = monthlyTrades.length;

  return { overallTotalTrades, monthlyTotalTrades };
}

// trader average R:R (overall + this month)
export function calculateAverageRR(trades) {
  if (!trades?.length) return { overallAverageRR: 0, monthlyAverageRR: 0 };

  // ---- Helper to calculate avg R:R from a given list of trades ----
  const getAverageRR = (tradeList) => {
    const closedTrades = tradeList.filter((t) =>
      ["win", "loss"].includes(t.status.toLowerCase()),
    );

    if (!closedTrades.length) return 0;

    const totalRR = closedTrades.reduce((sum, trade) => {
      if (!trade.riskToReward) return sum;

      const [reward, risk] = trade.riskToReward.split(":").map(Number);

      if (isNaN(reward) || isNaN(risk) || risk === 0) return sum;

      return sum + reward / risk;
    }, 0);

    return (totalRR / closedTrades.length).toFixed(1);
  };

  // ---- Overall Average R:R ----
  const overallAverageRR = getAverageRR(trades);

  // ---- Monthly Average R:R ----
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyTrades = trades.filter((trade) => {
    const tradeDate = new Date(trade.date);
    return (
      tradeDate.getMonth() === currentMonth &&
      tradeDate.getFullYear() === currentYear
    );
  });

  const monthlyAverageRR = getAverageRR(monthlyTrades);

  return { overallAverageRR, monthlyAverageRR };
}
