import { DiMongodb } from "react-icons/di";

const Data_Base = () => {
  return (
    <div className="h-full overflow-y-auto flex flex-col gap-5 p-1 h-[93%] border-2 border-borderGray m-1 w-2/3">
      <p className=" text-8xl">
        <DiMongodb />
      </p>
      <p>MongoDB</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
    </div>
  );
};

export default Data_Base;
