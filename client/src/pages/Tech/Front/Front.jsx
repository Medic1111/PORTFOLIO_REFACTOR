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
        hooks, etc..., proficiency in JSX, react router, handling and validating
        forms, knowledge about render cycle, implementation of S.O.L.I.D
        principles, proper folder structure, and extensive abstraction.
      </p>
      <hr></hr>
      {/*  */}
      <p className="text-8xl">
        <SiTailwindcss />
      </p>
      <p>TAILWIND-CSS</p>
      <p>
        Mostly used to rapidly build responsive and customizable user interfaces
        with a utility first and mobile first approach. Understanding of utility
        classes to avoid writing custom CSS. Easy integration and optimization
        in production builds.
      </p>
      <hr></hr>
      {/*  */}
      <p className="text-8xl">
        <SiRedux />
      </p>
      <p>REACT-REDUX</p>
      <p>
        My "go to" for managing complex application states with defined actions,
        reducers, and a store to control changes. Proficiency connecting
        components to the store.
      </p>
      <hr></hr>
      {/*  */}
      <p className="text-8xl">
        <TbApi />
      </p>
      <p>REDUX-TOOL-KIT & QUERY</p>
      <p>
        Experienced in setting up a react application with toolkit, providing
        excellent configuration to redux and simplifying store creating and
        state management. Solid understanding of slices and RTK-Query for API
        request traffic.
      </p>
      <hr></hr>
      {/*  */}
    </div>
  );
};

export default Front;
