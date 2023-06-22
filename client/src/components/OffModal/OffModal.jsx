import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
const OffModal = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <>
      {uiMgr.showOff ? (
        <>
          <div
            onClick={() => uiMgr.setShowOff(false)}
            className="bg-slate-950 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className=" relative w-auto my-6 mx-auto max-w-lg">
              <div className=" border-2 border-slate-950 relative flex flex-col w-full  outline-none focus:outline-none">
                <p className=" pl-1 text-start text-green-900 text-4xl ">
                  IT IS NOW SAFE TO CLOSE THIS APPLICATION 🦜
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default OffModal;
