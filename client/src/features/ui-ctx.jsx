import { createContext, useState } from "react";
import { uiInitialState } from "./ui_init_state";

export const uiCtx = createContext(uiInitialState);

const UiProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [popUpTitle, setPopUpTitle] = useState("");
  const [tabs, setTabs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showOff, setShowOff] = useState(false);
  const [showIn, setShowIn] = useState(true);

  const addTab = (title) => {
    if (tabs.includes(title)) return;
    return setTabs((prev) => [...prev, title]);
  };

  const retStateFoo = (title) => {
    switch (title.trim().toLowerCase()) {
      case "about":
        setShowAbout(true);
        break;
      case "resume":
        setShowResume(true);
        break;
      case "tech":
        setShowTech(true);
        break;
      case "projects":
        setShowProjects(true);
        break;
      case "contact":
        setShowContact(true);
        break;
      default:
        return "REACHING HERE";
    }
  };

  const closeTab = (title) => {
    return setTabs((prev) => {
      return prev.filter((el) => el !== title);
    });
  };

  const expandTab = (title) => {
    reset();
    setPopUpTitle(title);
    setShowPopUp(true);
    retStateFoo(title);
  };

  const reset = () => {
    setShowContact(false);
    setShowAbout(false);
    setShowProjects(false);
    setShowResume(false);
    setShowTech(false);
  };

  return (
    <uiCtx.Provider
      value={{
        showContact,
        setShowContact,
        showPopUp,
        setShowPopUp,
        showAbout,
        setShowAbout,
        showProjects,
        setShowProjects,
        showResume,
        setShowResume,
        showTech,
        setShowTech,
        popUpTitle,
        setPopUpTitle,
        tabs,
        addTab,
        expandTab,
        closeTab,
        showModal,
        setShowModal,
        showOff,
        setShowOff,
        showIn,
        setShowIn,
        reset,
      }}
    >
      {children}
    </uiCtx.Provider>
  );
};

export default UiProvider;
