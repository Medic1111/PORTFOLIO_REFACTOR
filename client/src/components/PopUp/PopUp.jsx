import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Tech from "../../pages/Tech/Tech";
import Resume from "../../pages/Resume/Resume";
import Projects from "../../pages/Projects/Projects";
import { FaEarlybirds } from "react-icons/fa";

const PopUp = () => {
  const uiMgr = useContext(uiCtx);

  const closeWindow = (title) => {
    uiMgr.closeTab(title);
    return uiMgr.setShowPopUp(false);
  };
  const minimize = (title) => {
    uiMgr.addTab(title);
    return uiMgr.setShowPopUp(false);
  };
  return (
    <article className="p-1 gap-5 flex flex-col items-center bg-darker justify-center  h-4/5 w-2/3   border-2 border-borderGray mr-5 gap-1">
      <div className=" bg-light border-b-2 border-borderGray py-1   flex  w-full items-center bg-btnGray justify-between">
        <p className="h-full flex items-center gap-1 pl-1 font-mono uppercase">
          <FaEarlybirds />
          {`${uiMgr.popUpTitle}`}
        </p>
        <div className="h-[92%] flex items-center justify-center gap-1 pr-1">
          <button
            onClick={() => minimize(uiMgr.popUpTitle)}
            className="border-2 border-borderGray bg-gray-500 pl-1 pr-1"
          >
            ↓
          </button>
          <button
            onClick={() => closeWindow(uiMgr.popUpTitle)}
            className=" border-2 border-gray-950 bg-gray-500 pl-1 pr-1"
          >
            ✕
          </button>
        </div>
      </div>

      <div className=" w-full bg-gray-300  border-2 border-gray-950 h-[80%] w-[95%] ">
        {uiMgr.showAbout && <About />}
        {uiMgr.showProjects && <Projects />}
        {uiMgr.showContact && <Contact />}
        {uiMgr.showResume && <Resume />}
        {uiMgr.showTech && <Tech />}
      </div>
    </article>
  );
};

export default PopUp;
