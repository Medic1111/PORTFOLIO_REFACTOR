const titles = ["M11-Studio", "Fleet-control", "!Cube-Studio"];
const Projects = () => {
  return (
    <section className="flex wrap lex-col items-start justify-start gap-8  w-full h-full p-5">
      <div className=" flex wrap  flex-col items-center justify-center">
        {titles.map((el) => {
          return (
            <>
              <button className="  text-5xl">🗂</button>
              <p className="pb-5">{el}</p>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
