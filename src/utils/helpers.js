import { parse, format } from "date-fns";

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
  const date = parse(dateString, "M/d/yyyy", new Date());
  return format(date, "MMM d, yyyy");
}

// trader winrate
export function calculateWinRate(trades) {
  if (!trades?.length) return;
  const wins = trades.filter((trade) => trade.status === "Win").length;
  return ((wins / trades.length) * 100).toFixed(1);
}
// trader lossrate
export function calculateLossRate(trades) {
  if (!trades?.length) return;
  const Loss = trades.filter((trade) => trade.status === "Loss").length;
  return ((Loss / trades.length) * 100).toFixed(1);
}

// trader total trade
export function calculateTotalTrades(trades) {
  if (!trades?.length) return;
  return trades.length;
}

// trader average rr
export function calculateAverageRR(trades) {
  if (!trades?.length) return 0;

  const closedTrades = trades.filter((t) =>
    ["win", "loss"].includes(t.status.toLowerCase()),
  );

  if (!closedTrades.length) return 0;

  const totalRR = closedTrades.reduce((sum, trade) => {
    if (!trade.riskToReward) return sum;

    const [reward, risk] = trade.riskToReward.split(":").map(Number);

    if (isNaN(reward) || isNaN(risk) || risk === 0) return sum;

    return sum + reward / risk;
  }, 0);

  return totalRR / closedTrades.length;
}
