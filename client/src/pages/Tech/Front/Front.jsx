import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { classes } from "../classes";
const Front = () => {
  return (
    <div className={classes.techListBox}>
      {/*  */}
      <p className="text-8xl">
        <IoLogoReact />
      </p>
      <p>REACT-JS</p>
      <p>
        Proper understanding of the virtual DOM, functional approach utilizing
        hooks suchs as: useState, useCallback, useContext, useEffect, custom
        hooks, etc..., knowledge about render cycle, implementation of S.O.L.I.D
        principles, proper folder structure, and extensive abstraction.
      </p>
      <hr></hr>
      {/*  */}
      <p className="text-8xl">
        <SiTailwindcss />
      </p>
      <p>TAILWIND-CSS</p>
      <p>
        Integration and implementation using the custom config file for themes.
        Abstraction and reutilization of styles. Mobile first development
        addressing proper breakpoints for beautiful designs that are mobile
        friendly.
      </p>
      <hr></hr>
      {/*  */}
      <p className="text-8xl">
        <SiRedux />
      </p>
      <p>REACT-REDUX</p>
      <p>
        Integration and implementation using the custom config file for themes.
        Abstraction and reutilization of styles. Mobile first development
        addressing proper breakpoints for beautiful designs that are mobile
        friendly.
      </p>
      <hr></hr>
      {/*  */}
      <p className="text-8xl">
        <TbApi />
      </p>
      <p>REDUX-TOOL-KIT & QUERY</p>
      <p>
        Integration and implementation using the custom config file for themes.
        Abstraction and reutilization of styles. Mobile first development
        addressing proper breakpoints for beautiful designs that are mobile
        friendly.
      </p>
      <hr></hr>
      {/*  */}
    </div>
  );
};

export default Front;
