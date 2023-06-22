import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const Nav = () => {
  const uiMgr = useContext(uiCtx);

  const showPopUp = (title, foo) => {
    uiMgr.reset();
    uiMgr.setShowPopUp(true);
    uiMgr.setPopUpTitle(title);
    foo(true);
  };

  return (
    <nav className=" flex wrap gap-7 flex-col items-center justify-start p-5 h-4/5 w-auto ">
      <button
        onClick={() => {
          showPopUp(" About", uiMgr.setShowAbout);
        }}
        className="text-5xl flex flex-col items-center justify-center"
      >
        📇
        <span className=" text-sm">about</span>
      </button>

      <button
        onClick={() => {
          showPopUp(" Resume", uiMgr.setShowResume);
        }}
        className="text-5xl flex flex-col items-center justify-center"
      >
        📑
        <span className=" text-sm">resume</span>
      </button>
      <button
        onClick={() => {
          showPopUp(" Tech", uiMgr.setShowTech);
        }}
        className=" text-5xl flex flex-col items-center justify-center"
      >
        ⚙️
        <span className=" text-sm">technologies</span>
      </button>
      <button
        onClick={() => {
          showPopUp(" projects", uiMgr.setShowProjects);
        }}
        className="text-5xl flex flex-col items-center justify-center"
      >
        🗂
        <span className=" text-sm">projects</span>
      </button>
      <button
        onClick={() => {
          showPopUp(" contact", uiMgr.setShowContact);
        }}
        className="text-5xl flex flex-col items-center justify-center"
      >
        📧
        <span className=" text-sm">contact</span>
      </button>
    </nav>
  );
};

export default Nav;
