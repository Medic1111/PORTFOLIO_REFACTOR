import Download from "./Download/Download";
import Education from "./Education/Education";
import Header from "./Header/Header";
import Experience from "./Experience/Experience";
import Wrapper from "./Wrapper/Wrapper";
import Skills from "./Skills/Skills";

const Resume = () => {
  return (
    <section className="w-full h-full">
      <Download />
      <Wrapper>
        <Header />
        <Skills />
        <Experience />
        <Education />
      </Wrapper>
    </section>
  );
};

export default Resume;
