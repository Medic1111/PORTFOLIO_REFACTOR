import { useContext } from "react";
import DateCal from "../Date/Date";
import Tabs from "../Tabs/Tabs";
import { uiCtx } from "../../features/ui-ctx";
import { TfiPrinter } from "react-icons/tfi";
import { GiParrotHead } from "react-icons/gi";
import { FaEarlybirds } from "react-icons/fa";

const Footer = () => {
  const uiMgr = useContext(uiCtx);
  return (
    <footer className="flex items-center justify-between gap-1 pt-3 pb-3 pl-5 pr-5 bg-gray-300 border-t-2 border-slate-950 fixed bottom-0 left-0 w-full">
      <div className="flex flex-center ">
        {/* <button
          onClick={() => uiMgr.setShowModal(true)}
          className=" p-1 mr-1 border-slate-950 border-2 text-center font-mono text-l uppercase bg-gray-400  text-slate-950"
        >
          🦜
        </button> */}
        <button
          onClick={() => uiMgr.setShowModal(true)}
          className=" bg-gray-400 p-1 mr-1 border-slate-950 border-2 text-center font-mono text-xl uppercase   text-slate-950"
        >
          <FaEarlybirds />
        </button>
        {/* <button
          onClick={() => window.print()}
          className="p-1 mr-1 border-2 border-slate-950 text-center font-mono text-l uppercase bg-gray-400 text-slate-950"
        >
          🖨
        </button> */}
        <button
          onClick={() => window.print()}
          className=" bg-gray-400 p-1 mr-1 border-2 border-slate-950 text-center font-mono text-xl uppercase  text-slate-950"
        >
          <TfiPrinter />
        </button>
      </div>
      <Tabs />
      <DateCal />
    </footer>
  );
};

export default Footer;
