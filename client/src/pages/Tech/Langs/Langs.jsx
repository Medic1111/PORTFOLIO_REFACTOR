import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJava } from "react-icons/fa";
const Langs = () => {
  return (
    <div className="h-[93.2%] overflow-y-auto flex flex-col gap-5 p-1 h-[92%] border-2 border-borderGray m-1 w-2/3">
      <p className=" text-8xl">
        <IoLogoJavascript />
      </p>
      <p>JAVASCRIPT-ES6</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
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
        controls.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <IoLogoCss3 />
      </p>
      <p>CSS-3</p>
      <p>
        Modular architecture, extensive use of layout features such as Flex-Box
        and Grid, media queries for responsive design, animations, typography
        sizes in relative units. If it can be done with a library, it can be
        done with css.
      </p>
      <hr></hr>
      {/*  */}
      <h2>INITIATING JOURNEY WITH:</h2>
      {/*  */}
      <hr></hr>
      <p className=" text-8xl">
        <FaJava />
      </p>
      <p>JAVA-17</p>
      <p>
        Basics down to "able to teach" level. Working on learning a stack for
        it. Slowly but surely.
      </p>
      <hr></hr>
      {/*  */}
    </div>
  );
};

export default Langs;
