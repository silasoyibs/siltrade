import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return false;
  });

  //  store dark mode
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  function onToggle() {
    setIsDark((prevIsDark) => !prevIsDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDark, onToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error(
      "DarkModeContext can not be use out DarkModeContextProvider",
    );
  return context;
}

export { DarkModeProvider, useDarkMode };
