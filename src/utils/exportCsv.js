const csvColumns = [
  ["type", "Type"],
  ["date", "Date"],
  ["pair", "Pair"],
  ["entry", "Entry"],
  ["exit", "Exit"],
  ["stopLoss", "Stoploss"],
  ["status", "Status"],
  ["riskToReward", "Risk to Reward"],
  ["result", "Result"],
  ["notes", "Notes"],
];

function escapeCsvValue(value) {
  const stringValue = value == null ? "" : String(value);
  return `"${stringValue.replaceAll('"', '""')}"`;
}

export function downloadTradesCsv(trades, status) {
  const header = csvColumns.map(([, label]) => label).join(",");
  const rows = trades.map((trade) =>
    csvColumns.map(([key]) => escapeCsvValue(trade[key])).join(","),
  );
  const csv = [header, ...rows].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${status.toLowerCase()}-trades.csv`;
  link.click();
  URL.revokeObjectURL(url);
}