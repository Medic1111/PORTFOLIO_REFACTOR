const Download = () => {
  return (
    <div className="  w-full p-2 border-b-2 border-borderGray ">
      <a
        href="/new_resume.pdf"
        download
        className="m-1 bg-btnGrayLight w-auto p-1 border-2 border-borderGray"
      >
        🔽 DOWNLOAD
      </a>
    </div>
  );
};

export default Download;
