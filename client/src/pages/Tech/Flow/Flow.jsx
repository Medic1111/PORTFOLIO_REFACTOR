import { FaGithubAlt, FaJira } from "react-icons/fa";
import { DiScrum } from "react-icons/di";

const Flow = () => {
  return (
    <div className="h-full overflow-y-auto flex flex-col gap-5 p-1 h-[93%] border-2 border-borderGray m-1 w-2/3">
      <p className=" text-8xl">
        <DiScrum />
      </p>
      <p>SCRUM/Agile</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <FaGithubAlt />
      </p>
      <p>Github Projects</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <FaJira />
      </p>
      <p>Jira</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
    </div>
  );
};

export default Flow;
