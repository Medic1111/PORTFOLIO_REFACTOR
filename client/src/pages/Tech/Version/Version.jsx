import { FaGitSquare, FaGithub } from "react-icons/fa";
import { classes } from "../classes";

const Version = () => {
  return (
    <div className={classes.techListBox}>
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
