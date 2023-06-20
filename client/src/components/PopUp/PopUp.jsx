const PopUp = ({ setShowPopUp, title, children }) => {
  const closePopUp = () => setShowPopUp(false);
  return (
    <article className=" gap-5 flex flex-col items-center bg-darker justify-center  h-4/5 w-2/3   border-2 border-borderGray mr-5 gap-1">
      <div className="bg-light border-b-2 border-borderGray py-1  flex  w-[95%] items-center bg-btnGray justify-between">
        <p className=" font-mono uppercase">{title}</p>
        <div className=" flex items-center justify-center gap-1 pr-1">
          <button className="border-2 border-borderGray bg-gray-500 pl-1 pr-1">
            ↓
          </button>
          <button
            onClick={closePopUp}
            className=" border-2 border-gray-950 bg-gray-500 pl-1 pr-1"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="w-full bg-gray-300  border-2 border-gray-950 h-[80%] w-[95%] ">
        {children}
      </div>
    </article>
  );
};

export default PopUp;
