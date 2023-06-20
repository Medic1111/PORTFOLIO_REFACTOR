import { createContext, useState } from "react";

export const uiCtx = createContext({
  showPopUp: false,
  setShowPopUp: () => {},
  showing: "",
  setShowing: () => {},
});

const UiProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showing, setShowing] = useState("");
  return (
    <uiCtx.Provider
      value={{
        showing,
        setShowing,
        showPopUp,
        setShowPopUp,
      }}
    >
      {children}
    </uiCtx.Provider>
  );
};

export default UiProvider;
