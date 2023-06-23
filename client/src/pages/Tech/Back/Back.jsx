import { SiExpress } from "react-icons/si";
import { DiNodejs, DiNodejsSmall } from "react-icons/di";
import { classes } from "../classes";

const Back = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <DiNodejsSmall />
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
