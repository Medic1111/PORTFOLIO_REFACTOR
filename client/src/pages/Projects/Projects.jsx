import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { data } from "./data/data";

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
      <div className=" w-full  h-full flex flex-wrap flex-col items-start justify-start px-5 sm:px-0 py-5 ">
        {data.map((el, index) => {
          return (
            <div
              key={`FOLDER_${index}`}
              className="w-1/4  flex flex-col items-center"
            >
              <button
                onClick={() => selectProject(el.title)}
                className=" text-3xl sm:text-5xl"
              >
                🗂
              </button>
              <p className="pb-5 text-center">{el.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
