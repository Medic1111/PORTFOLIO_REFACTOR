import { SiJest, SiJasmine } from "react-icons/si";
import { classes } from "../classes";

const Testing = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <SiJest />
      </p>
      <p>Jest.js</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <SiJasmine />
      </p>
      <p>Jasmine</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr>
    </div>
  );
};

export default Testing;
