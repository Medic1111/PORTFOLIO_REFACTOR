import { useContext } from "react";
import { techCtx } from "../../features/tech-ctx";
import Langs from "./Langs/Langs";
import Front from "./Front/Front";
import Back from "./Back/Back";
import Data_Base from "./Data_Base/Data_Base";
import Testing from "./Testing/Testing";
import Version from "./Version/Version";
import Flow from "./Flow/Flow";
import { classes } from "./classes";

const Tech = () => {
  const techMgr = useContext(techCtx);

  const selectOption = (foo) => {
    techMgr.reset();
    foo(true);
  };

  const dataArr = [
    {
      title: "lang",
      foo: techMgr.setShowLang,
    },
    {
      title: "front",
      foo: techMgr.setShowFront,
    },
    {
      title: "back",
      foo: techMgr.setShowBack,
    },
    {
      title: "data",
      foo: techMgr.setShowDB,
    },
    {
      title: "test",
      foo: techMgr.setShowTest,
    },
    {
      title: "v",
      foo: techMgr.setShowVersion,
    },
    {
      title: "flow",
      foo: techMgr.setShowFlow,
    },
  ];

  return (
    <section className={classes.techContainer}>
      {techMgr.showLang && <Langs />}
      {techMgr.showFront && <Front />}
      {techMgr.showBack && <Back />}
      {techMgr.showDB && <Data_Base />}
      {techMgr.showTest && <Testing />}
      {techMgr.showVersion && <Version />}
      {techMgr.showFlow && <Flow />}

      <div className={classes.btnBox}>
        {dataArr.map((obj, index) => {
          return (
            <button
              key={`TECH_${index}`}
              onClick={() => selectOption(obj.foo)}
              className={classes.btn}
            >
              {obj.title}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
