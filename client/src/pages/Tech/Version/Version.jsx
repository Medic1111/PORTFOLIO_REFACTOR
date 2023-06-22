import { FaGitSquare, FaGithub } from "react-icons/fa";

const Version = () => {
  return (
    <div className="h-full overflow-y-auto flex flex-col gap-5 p-1 h-[92.8%] border-2 border-borderGray m-1 w-2/3">
      <p className=" text-8xl">
        <FaGitSquare />
      </p>
      <p>Git</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <FaGithub />
      </p>
      <p>Github</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
    </div>
  );
};

export default Version;
