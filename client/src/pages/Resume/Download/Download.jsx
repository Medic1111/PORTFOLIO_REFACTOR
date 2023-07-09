const Download = () => {
  return (
    <div className="  w-full p-2 border-b-2 border-borderGray ">
      <a
        href="/new_resume.pdf"
        download
        className="m-1 bg-btnGrayLight w-auto p-1 border-2 hover:border-b-slate-100 hover:border-r-slate-100 hover:border-t-slate-950 hover:border-l-slate-950 border-slate-950 border-2  border-t-slate-100 border-l-slate-100 "
      >
        🔽 DOWNLOAD
      </a>
    </div>
  );
};

export default Download;
