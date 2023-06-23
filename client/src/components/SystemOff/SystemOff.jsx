import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { classes } from "./classes";

const SystemOff = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <>
      {uiMgr.showModal ? (
        <>
          <div className={classes.modalBox}>
            <div className={classes.popUpBox}>
              {/*content*/}
              <div className={classes.contentBox}>
                {/*header*/}
                <div className={classes.headerBox}>
                  <h3 className={classes.header}>Kiwi System:</h3>
                </div>
                {/*body*/}
                <div className={classes.textBox}>
                  <p className={classes.text}>Shut system off?</p>
                </div>
                {/*footer*/}
                <div className={classes.btnBox}>
                  <button
                    className={classes.btn}
                    type="button"
                    onClick={() => {
                      uiMgr.setShowModal(false);
                      uiMgr.setShowOff(true);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className={classes.btn}
                    type="button"
                    onClick={() => uiMgr.setShowModal(false)}
                  >
                    no
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SystemOff;
