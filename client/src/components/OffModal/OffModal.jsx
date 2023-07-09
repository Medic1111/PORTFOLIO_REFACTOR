import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { FaEarlybirds } from "react-icons/fa";
import { classes } from "./classes";

const OffModal = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <>
      {uiMgr.showOff ? (
        <>
          <div
            onClick={() => uiMgr.setShowOff(false)}
            className={classes.modalBox}
          >
            <div className={classes.txtBox}>
              <p className={classes.icon}>
                <FaEarlybirds />
              </p>

              <p className={classes.txt}>
                It is now safe to close this application
              </p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OffModal;
