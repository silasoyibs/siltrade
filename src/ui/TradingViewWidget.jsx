// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

function TradingViewWidget() {
  const container = useRef();
  const { isDark } = useDarkMode();

  useEffect(() => {
    // Prevent if no ref
    if (!container.current) return;

    // ❗ Clear out any previously injected chart
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "allow_symbol_change": true,
      "calendar": false,
      "details": false,
      "hide_side_toolbar": false,
      "hide_top_toolbar": false,
      "hide_legend": false,
      "hide_volume": false,
      "hotlist": false,
      "interval": "D",
      "locale": "en",
      "save_image": true,
      "style": "1",
      "symbol": "FX:EURUSD",
      "theme": "${isDark ? "dark" : "white"}",
      "timezone": "Etc/UTC",
      "backgroundColor": "${isDark ? "dark" : "white"}",
      "gridColor": "rgba(46, 46, 46, 0.06)",
      "watchlist": [],
      "withdateranges": false,
      "compareSymbols": [],
      "studies": [],
      "autosize": true
    }`;

    container.current.appendChild(script);
  }, [isDark]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/FX-EURUSD/?exchange=FX"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">EURUSD chart by TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
