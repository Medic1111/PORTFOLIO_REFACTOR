import { useContext } from "react";
import { classes } from "./classes";
import { uiCtx } from "../../../features/ui-ctx";

const Tabs = () => {
  const uiMgr = useContext(uiCtx);

  const expandTab = (title) => uiMgr.expandTab(title);

  if (uiMgr.tabs.length <= 0) return null;

  return (
    <div className={classes.div}>
      {uiMgr.tabs.map((title) => (
        <p onClick={() => expandTab(title)} className={classes.p}>
          | {` ${title}`}
        </p>
      ))}
    </div>
  );
};

export default Tabs;
