const Nav = ({ setShowPopUp, setShowing }) => {
  const showPopUp = (title) => {
    setShowPopUp(true);
    setShowing(title);
  };

  return (
    <nav className=" flex wrap gap-7 flex-col items-center justify-start p-5 h-4/5 w-auto ">
      <button
        onClick={() => showPopUp("contact")}
        className="text-5xl flex flex-col items-center justify-center"
      >
        📧
        <span className=" text-sm">contact</span>
      </button>
      <button
        onClick={() => showPopUp("projects")}
        className="text-5xl flex flex-col items-center justify-center"
      >
        🗂
        <span className=" text-sm">projects</span>
      </button>
      <button
        onClick={() => showPopUp("resume")}
        className="text-5xl flex flex-col items-center justify-center"
      >
        📑
        <span className=" text-sm">resume</span>
      </button>
      <button
        onClick={() => showPopUp("technologies")}
        className="text-5xl flex flex-col items-center justify-center"
      >
        ⚙️
        <span className=" text-sm">technologies</span>
      </button>
      <button
        onClick={() => showPopUp("about")}
        className="text-5xl flex flex-col items-center justify-center"
      >
        👤
        <span className=" text-sm">about</span>
      </button>
    </nav>
  );
};

export default Nav;
