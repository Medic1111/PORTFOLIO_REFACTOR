import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { classes } from "../classes";
const Langs = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <IoLogoJavascript />
      </p>
      <p>JAVASCRIPT-ES6</p>
      <p>
        Primary language written mostly in ES6, making extensive use of arrow
        functions, template literals, destructuring assignments, spread and rest
        operators, default parameters, classes and OOP by understanding class
        declarations, inheritance, constructors, and super. Modular approach for
        organized and reusable components. Arrays and Objects ES6 methods for
        more concise and functional programming approaches.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <IoLogoHtml5 />
      </p>
      <p>HTML-5</p>
      <p>
        Version 5 specifically for enhanced browser compatibility, multimedia
        support, increased performance and mobile support, and better form
        controls, while structuring web content in a meaningful and accessible
        way via semantic elements.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <IoLogoCss3 />
      </p>
      <p>CSS-3</p>
      <p>
        Modular architecture, extensive use of layout features such as Flex-Box
        and Grid, solid understanding of CSS box model, media queries for
        responsive design, animations, typography sizes in relative units.
        Knowledge regarding CSS Selectors and specificity, including
        pseudo-classes.
      </p>
      <hr></hr>
      {/*  */}
      {/* <h2>INITIATING JOURNEY WITH:</h2> */}
      {/* <hr></hr> */}
      {/* <p className=" text-8xl">
        <FaJava />
      </p>
      <p>JAVA-17</p>
      <p>
        Basics down to "able to teach" level. Working on learning a stack for
        it. Slowly but surely.
      </p>
      <hr></hr> */}
    </div>
  );
};

export default Langs;
