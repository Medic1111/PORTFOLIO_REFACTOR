import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Tech from "../../pages/Tech/Tech";
import Resume from "../../pages/Resume/Resume";
import Projects from "../../pages/Projects/Projects";
import { FaEarlybirds } from "react-icons/fa";
import { classes } from "./classes";

const PopUp = () => {
  const uiMgr = useContext(uiCtx);
  let hasSelected = false;

  const closeWindow = (title) => {
    uiMgr.closeTab(title);
    return uiMgr.setShowPopUp(false);
  };
  const minimize = (title) => {
    uiMgr.addTab(title);
    return uiMgr.setShowPopUp(false);
  };
  return (
    <article className={classes.popUp}>
      <div className={classes.headerBox}>
        <p className={classes.icon}>
          <FaEarlybirds />
          {`${uiMgr.popUpTitle}`}
        </p>
        <div className={classes.btnBox}>
          <button
            onClick={() => minimize(uiMgr.popUpTitle)}
            className={classes.btn}
          >
            ↓
          </button>
          <button
            onClick={() => closeWindow(uiMgr.popUpTitle)}
            className={classes.btn}
          >
            ✕
          </button>
        </div>
      </div>

      <div className={classes.contentWrapper}>
        {uiMgr.showAbout && <About hasSelected={hasSelected} />}
        {uiMgr.showProjects && <Projects />}
        {uiMgr.showContact && <Contact />}
        {uiMgr.showResume && <Resume />}
        {uiMgr.showTech && <Tech />}
      </div>
    </article>
  );
};

export default PopUp;
