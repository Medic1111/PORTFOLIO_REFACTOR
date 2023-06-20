import DateCal from "../Date/Date";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-1 pt-3 pb-3 pl-5 pr-5 bg-gray-300 border-t-2 border-slate-950 fixed bottom-0 left-0 w-full">
      <div>
        <button className=" p-1 mr-1 border-slate-950 border-2 text-center font-mono text-l uppercase bg-gray-400  text-slate-950">
          🦜 start
        </button>
        <button className="p-1 mr-1 border-2 border-slate-950 text-center font-mono text-l uppercase bg-gray-400 text-slate-950">
          print
        </button>
      </div>
      <DateCal />
    </footer>
  );
};

export default Footer;
