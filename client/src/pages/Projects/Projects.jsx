import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const titles = [
  "M11-Studio",
  // "Nomad-me",
  // "Fleet-control",
  // "!Cube-Studio",
  // "Open-source",
];
const Projects = () => {
  const uiMgr = useContext(uiCtx);

  const selectProject = (title) => {
    uiMgr.reset();
    uiMgr.setPopUpTitle(title);
    uiMgr.setShowEachProject(true);
    uiMgr.setProjectToShow(title);
  };

  return (
    <section className="overflow-auto flex  flex-col items-start justify-start gap-8  w-full h-full ">
      <div className=" w-full h-full flex flex-wrap flex-col items-start justify-start  p-5">
        {titles.map((el) => {
          return (
            <div className="w-1/3 sm:w-1/5 flex flex-col items-center">
              <button onClick={() => selectProject(el)} className="  text-5xl">
                🗂
              </button>
              <p className="pb-5 text-center">{el}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
