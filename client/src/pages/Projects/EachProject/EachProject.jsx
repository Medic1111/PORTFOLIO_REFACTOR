import { uiCtx } from "../../../features/ui-ctx";
import { data, stateTemplate } from "../data/data";
import { useContext, useEffect, useState } from "react";

const findSelected = (title, arr) => {
  return arr.find((obj) => obj.title.toLowerCase() === title.toLowerCase());
};

const EachProject = () => {
  const selectedTitle = useContext(uiCtx).projectToShow;
  const [projectToShow, setProjectToShow] = useState(stateTemplate);

  useEffect(() => {
    return setProjectToShow(findSelected(selectedTitle, data));
  }, [selectedTitle, projectToShow]);

  return (
    <div className="p-2 overflow-y-auto  h-full w-full">
      <img className=" border-2 border-gray-800" src={projectToShow.hero} />
      <h3 className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-5xl">
        {projectToShow.title.toUpperCase()}
      </h3>
      <div className="pl-2 py-5 border-t-0 border-2 border-gray-800 flex flex-col items-start justify-start gap-1 ">
        <a
          target="_blank"
          className="underline decoration-sky-700"
          href={projectToShow.live}
        >
          check it live
        </a>
        <a
          target="_blank"
          className="underline decoration-sky-700"
          href={projectToShow.source}
        >
          source code
        </a>
      </div>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-xl">
        Summary:
      </p>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-md">
        {projectToShow.summary}
      </p>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-xl">
        Tech talk:
      </p>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-md">
        {projectToShow.tech}
      </p>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-xl">
        Status:
      </p>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-md">
        {projectToShow.status}
      </p>
      <p className="pl-2 py-5 border-t-0 border-2 border-gray-800 text-xl">
        Gallery:
      </p>
      {projectToShow.gallery.map((el) => (
        <img className=" border-2 border-t-0  border-gray-800" src={el} />
      ))}
    </div>
  );
};

export default EachProject;
