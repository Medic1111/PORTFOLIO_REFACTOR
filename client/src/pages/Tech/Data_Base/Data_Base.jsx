import { DiMongodb } from "react-icons/di";
import { classes } from "../classes";

const Data_Base = () => {
  return (
    <div className={classes.techListBox}>
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
