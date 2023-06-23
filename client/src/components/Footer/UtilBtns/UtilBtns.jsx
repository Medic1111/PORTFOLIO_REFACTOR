import { useContext } from "react";
import { uiCtx } from "../../../features/ui-ctx";
import { classes } from "../classes";
import { TfiPrinter } from "react-icons/tfi";
import { FaEarlybirds } from "react-icons/fa";

const UtilBtns = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <div className={classes.btnBox}>
      <button onClick={() => uiMgr.setShowModal(true)} className={classes.btn}>
        <FaEarlybirds />
      </button>
      <button onClick={() => window.print()} className={classes.btn}>
        <TfiPrinter />
      </button>
    </div>
  );
};

export default UtilBtns;
