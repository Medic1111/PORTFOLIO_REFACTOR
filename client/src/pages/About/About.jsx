import { useEffect, useState } from "react";
import { prompt } from "./Data/data";
import { useMediaQuery } from "react-responsive";
import More from "./More/More";
import AnimTxt from "./AnimTxt/AnimTxt";

const About = ({ hasSelected }) => {
  const [showMore, setShowMore] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [showQuit, setShowQuit] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 440px)" });

  const handleKeyDown = (e) => {
    let kee = e.key.toLowerCase();
    if (!hasSelected) {
      kee === "y" && setShowMore(true);
      kee === "n" && setShowQuit(true);
      kee !== "y" && kee !== "n" && setShowInvalid(true);
      hasSelected = true;
    }
  };

  useEffect(() => {
    !isMobile && document.addEventListener("keydown", handleKeyDown);
  }, [isMobile]);

  return (
    <section
      cascade="true"
      className=" overflow-auto w-full h-full bg-slate-950 text-slate-50"
    >
      {prompt.map((el, index) => {
        return (
          <AnimTxt key={`PROMPT_${index}`} el={el} delay={(1000 * index) / 2} />
        );
      })}
      {!isMobile ? <AnimTxt el={"Display more? Y/N"} delay={3000} /> : null}
      {showQuit ? <p>_kw_: .quitting</p> : null}
      {showInvalid ? <p>_kw_: INVALID ENTRY | .quitting</p> : null}
      {showMore ? <More /> : null}
    </section>
  );
};

export default About;
