import { useState } from "react";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import Nav from "../../components/Nav/Nav";
import PopUp from "../../components/PopUp/PopUp";

const Home = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between h-screen w-screen">
      <Nav setShowing={uiMgr.setShowing} setShowPopUp={uiMgr.setShowPopUp} />
      {uiMgr.showPopUp && uiMgr.showing === "contact" && (
        <PopUp setShowPopUp={uiMgr.setShowPopUp} title={"contact"}>
          contact
        </PopUp>
      )}
      {uiMgr.showPopUp && uiMgr.showing === "projects" && (
        <PopUp setShowPopUp={uiMgr.setShowPopUp} title={"projects"}>
          projects
        </PopUp>
      )}
      {uiMgr.showPopUp && uiMgr.showing === "resume" && (
        <PopUp setShowPopUp={uiMgr.setShowPopUp} title={"resume"}>
          resume
        </PopUp>
      )}
      {uiMgr.showPopUp && uiMgr.showing === "technologies" && (
        <PopUp setShowPopUp={uiMgr.setShowPopUp} title={"technologies"}>
          technologies
        </PopUp>
      )}
      {uiMgr.showPopUp && uiMgr.showing === "about" && (
        <PopUp setShowPopUp={uiMgr.setShowPopUp} title={"about"}>
          about
        </PopUp>
      )}
    </main>
  );
};

export default Home;
