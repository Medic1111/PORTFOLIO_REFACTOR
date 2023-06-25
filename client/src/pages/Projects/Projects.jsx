import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const titles = ["M11-Studio", "Fleet-control", "!Cube-Studio"];
const Projects = () => {
  const uiMgr = useContext(uiCtx);

  const selectProject = (title) => {
    uiMgr.reset();
    uiMgr.setPopUpTitle(title);
    uiMgr.setShowEachProject(true);
    uiMgr.setProjectToShow(title);
  };

  return (
    <section className="flex wrap flex-col items-start justify-start gap-8  w-full h-full ">
      <div className=" flex wrap  flex-col items-center justify-center p-5">
        {titles.map((el) => {
          return (
            <>
              <button onClick={() => selectProject(el)} className="  text-5xl">
                🗂
              </button>
              <p className="pb-5">{el}</p>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
