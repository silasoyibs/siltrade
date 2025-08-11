import { createContext, useContext, useState } from "react";

const JournalContext = createContext();

function JournalContextProvider({ children }) {
  const [journal, setJournal] = useState(null);

  return (
    <JournalContext.Provider value={{ journal, setJournal }}>
      {children}
    </JournalContext.Provider>
  );
}

function useJournal() {
  const context = useContext(JournalContext);
  if (context === undefined)
    throw new Error("JournalContext can not be use out JournalContextProvider");
  return context;
}

export { JournalContextProvider, useJournal };
