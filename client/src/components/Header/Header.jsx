import { FaEarlybirds } from "react-icons/fa";
const Header = () => {
  return (
    <header className="pl-5 pr-5 flex items-center justify-between fixed top-0 left-0 w-full pt-3 pb-3 bg-gray-300 border-b-2 border-slate-950 ">
      <p className="font-mono text-l uppercase  text-slate-950">
        ARYSE PAGANO | software engineer
      </p>
      <p className="text-2xl">
        {" "}
        <FaEarlybirds />{" "}
      </p>
    </header>
  );
};

export default Header;
