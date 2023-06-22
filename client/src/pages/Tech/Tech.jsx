import { useContext } from "react";
import { techCtx } from "../../features/tech-ctx";
import Langs from "./Langs/Langs";
import Front from "./Front/Front";
import Back from "./Back/Back";
import Data_Base from "./Data_Base/Data_Base";
import Testing from "./Testing/Testing";
import Version from "./Version/Version";
import Flow from "./Flow/Flow";
const Tech = () => {
  const techMgr = useContext(techCtx);

  const selectOption = (foo) => {
    techMgr.reset();
    foo(true);
  };

  return (
    <section className="p-1 gap-1 flex items-start justify-between w-full h-full bg-light">
      {techMgr.showLang && <Langs />}
      {techMgr.showFront && <Front />}
      {techMgr.showBack && <Back />}
      {techMgr.showDB && <Data_Base />}
      {techMgr.showTest && <Testing />}
      {techMgr.showVersion && <Version />}
      {techMgr.showFlow && <Flow />}

      <div className="p-1 flex flex-col gap-1 items-center justify-start h-[93%] border-2 border-borderGray m-1  bg-darker w-1/3">
        <button
          onClick={() => selectOption(techMgr.setShowLang)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          languages
        </button>
        <button
          onClick={() => selectOption(techMgr.setShowFront)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          frontend
        </button>
        <button
          onClick={() => selectOption(techMgr.setShowBack)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          backend
        </button>
        <button
          onClick={() => selectOption(techMgr.setShowDB)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          database
        </button>
        <button
          onClick={() => selectOption(techMgr.setShowTest)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          testing
        </button>
        <button
          onClick={() => selectOption(techMgr.setShowVersion)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          version
        </button>
        <button
          onClick={() => selectOption(techMgr.setShowFlow)}
          className="bg-light uppercase w-full border-2 border-borderGray"
        >
          flow
        </button>
      </div>
    </section>
  );
};

export default Tech;
