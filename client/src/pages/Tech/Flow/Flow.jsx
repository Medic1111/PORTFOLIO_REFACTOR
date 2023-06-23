import { FaGithubAlt, FaJira } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { classes } from "../classes";

const Flow = () => {
  return (
    <div className={classes.techListBox}>
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
