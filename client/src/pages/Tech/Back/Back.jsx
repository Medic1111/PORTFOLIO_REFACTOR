import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const Back = () => {
  return (
    <div className="h-full overflow-y-auto flex flex-col gap-5 p-1 h-[92.8%] border-2 border-borderGray m-1 w-2/3">
      <p className=" text-[10em]">
        <DiNodejs />
      </p>
      <p>Node.js</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-7xl">
        <SiExpress />
      </p>
      <p>Express.js</p>
      <p>
        Version 5 specifically for enhanced browser compatibility, multimedia
        support, increased performance and mobile support, and better form
        controls.
      </p>
      <hr></hr>
    </div>
  );
};

export default Back;
