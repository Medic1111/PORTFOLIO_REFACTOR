import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { Fade } from "react-awesome-reveal";
import { FaEarlybirds } from "react-icons/fa";
import { classes } from "./classes";

const InModal = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <>
      {uiMgr.showIn ? (
        <>
          <div
            onClick={() => uiMgr.setShowIn(false)}
            className={classes.modalBox}
          >
            <div className={classes.txtBox}>
              <p className={classes.icon}>
                <FaEarlybirds />
              </p>
              <Fade duration={"200"} cascade className={classes.txt}>
                BOOTING UP...
              </Fade>
              <br />
              <Fade
                delay={1000}
                duration={"200"}
                cascade
                className={classes.txt}
              >
                READY: CLICK TO START
              </Fade>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default InModal;
