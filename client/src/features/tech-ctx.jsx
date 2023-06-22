import { createContext, useState } from "react";

export const techCtx = createContext({
  showLang: true,
  setShowLang: () => {},
  showFront: "",
  setShowFront: () => {},
  showBack: false,
  setShowBack: () => {},
  showDB: false,
  setShowDB: () => {},
  showTest: false,
  setShowTest: () => {},
  showVersion: false,
  setShowVersion: () => {},
  showFlow: false,
  setShowFlow: () => {},
  reset: () => {},
});

const TechProvider = ({ children }) => {
  const [showLang, setShowLang] = useState(true);
  const [showFront, setShowFront] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [showDB, setShowDB] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showVersion, setShowVersion] = useState(false);
  const [showFlow, setShowFlow] = useState("");

  const reset = () => {
    setShowLang(false);
    setShowFront(false);
    setShowBack(false);
    setShowDB(false);
    setShowTest(false);
    setShowVersion(false);
    setShowFlow(false);
  };

  return (
    <techCtx.Provider
      value={{
        showLang,
        setShowLang,
        showFront,
        setShowFront,
        showBack,
        setShowBack,
        showDB,
        setShowDB,
        showTest,
        setShowTest,
        showVersion,
        setShowVersion,
        showFlow,
        setShowFlow,
        reset,
      }}
    >
      {children}
    </techCtx.Provider>
  );
};

export default TechProvider;
