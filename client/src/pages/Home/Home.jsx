import { classes } from "./classes";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import Nav from "../../components/Nav/Nav";
import PopUp from "../../components/PopUp/PopUp";

const Home = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <main className={classes.main}>
      <Nav />
      {uiMgr.showPopUp && <PopUp />}
    </main>
  );
};

export default Home;
