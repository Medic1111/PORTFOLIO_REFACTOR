import { FaEarlybirds } from "react-icons/fa";
import { classes } from "./classes";
const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.title}>ARYSE PAGANO | software engineer</p>
      <p className={classes.bird}>
        {" "}
        <FaEarlybirds />{" "}
      </p>
    </header>
  );
};

export default Header;
