import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { classes } from "./classes";

const Nav = () => {
  const uiMgr = useContext(uiCtx);

  const showPopUp = (title, foo) => {
    uiMgr.reset();
    uiMgr.setShowPopUp(true);
    uiMgr.setPopUpTitle(title);
    foo(true);
  };

  return (
    <nav className={classes.nav}>
      <button
        onClick={() => {
          showPopUp("About", uiMgr.setShowAbout);
        }}
        className={classes.btn}
      >
        📇
        <span className={classes.span}>about</span>
      </button>

      <button
        onClick={() => {
          showPopUp(" Resume", uiMgr.setShowResume);
        }}
        className={classes.btn}
      >
        📑
        <span className={classes.span}>resume</span>
      </button>
      <button
        onClick={() => {
          showPopUp(" Tech", uiMgr.setShowTech);
        }}
        className={classes.btn}
      >
        ⚙️
        <span className={classes.span}>tech</span>
      </button>
      <button
        onClick={() => {
          showPopUp(" projects", uiMgr.setShowProjects);
        }}
        className={classes.btn}
      >
        🗂
        <span className={classes.span}>projects</span>
      </button>
      <button
        onClick={() => {
          showPopUp(" contact", uiMgr.setShowContact);
        }}
        className="text-3xl sm:text-5xl flex flex-col items-center justify-center"
      >
        📧
        <span className={classes.span}>contact</span>
      </button>
    </nav>
  );
};

export default Nav;
