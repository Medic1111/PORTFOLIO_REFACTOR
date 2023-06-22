import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import { Fade } from "react-awesome-reveal";
import { FaEarlybirds } from "react-icons/fa";

const InModal = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <>
      {uiMgr.showIn ? (
        <>
          <div
            onClick={() => uiMgr.setShowIn(false)}
            className="bg-slate-950 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className=" relative w-auto my-6 mx-auto max-w-lg">
              <div className=" border-2 border-slate-950 relative flex flex-col w-full  outline-none focus:outline-none">
                <Fade
                  duration={"200"}
                  cascade
                  className=" pl-1 text-start text-green-900 text-4xl "
                >
                  BOOTING UP...
                </Fade>
                <br />
                <Fade
                  delay={1000}
                  duration={"200"}
                  cascade
                  className=" pl-1 text-start text-green-900 text-4xl "
                >
                  READY: CLICK TO START
                </Fade>
                <p className="pt-5 text-green-900 text-2xl">
                  <FaEarlybirds />
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default InModal;
