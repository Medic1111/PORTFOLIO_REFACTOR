import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";

const SystemOff = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <>
      {uiMgr.showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" relative w-auto my-6  mx-auto max-w-lg ">
              {/*content*/}
              <div className=" border-2 border-slate-950 relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  w-full items-start justify-between border-b border-solid border-slate-200 ">
                  <h3 className="bg-gray-400 p-1 w-96 border-b-2 border-slate-950   text-l font-semibold ">
                    Kiwi System:
                  </h3>
                </div>
                {/*body*/}
                <div className="h-16 w-full w-80 relative flex-auto">
                  <p className="pl-1 text-start text-slate-950 text-md ">
                    Shut system off?
                  </p>
                </div>
                {/*footer*/}
                <div className="w-full flex items-between  p-1  ">
                  <button
                    className="text-gray-950 border-2 border-gray-950  uppercase  px-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      uiMgr.setShowModal(false);
                      uiMgr.setShowOff(true);
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="text-gray-950 border-2 border-gray-950  uppercase  px-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
