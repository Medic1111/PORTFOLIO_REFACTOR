import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { FaEarlybirds } from "react-icons/fa";

const Tabs = () => {
  const uiMgr = useContext(uiCtx);

  const expandTab = (title) => uiMgr.expandTab(title);

  if (uiMgr.tabs.length <= 0) return null;

  return (
    <div className=" bg-gray-300 border-2 border-slate-950 truncate  flex flex-grow">
      {uiMgr.tabs.map((title) => (
        <p
          onClick={() => expandTab(title)}
          className=" flex-grow cursor-pointer hover:bg-gray-400 truncate p-1 "
        >
          | {` ${title}`}
        </p>
      ))}
    </div>
  );
};

export default Tabs;
