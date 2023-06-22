import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import Nav from "../../components/Nav/Nav";
import PopUp from "../../components/PopUp/PopUp";

const Home = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between h-screen w-screen">
      <Nav />
      {uiMgr.showPopUp && <PopUp />}
    </main>
  );
};

export default Home;
