import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { more, prompt } from "./Data/data";
import { useMediaQuery } from "react-responsive";

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
      cascade
      className=" overflow-auto w-full h-full bg-slate-950 text-slate-50"
    >
      {prompt.map((el, index) => {
        return (
          <>
            <Fade triggerOnce delay={(1000 * index) / 2} duration={50} cascade>
              {el}
            </Fade>
            <br />
          </>
        );
      })}
      {!isMobile ? (
        <>
          <Fade triggerOnce delay={3000} duration={50} cascade>
            Display more? Y/N
          </Fade>
          <br />
        </>
      ) : null}
      {showQuit ? <p>_kw_: .quitting</p> : null}
      {showInvalid ? <p>_kw_: INVALID ENTRY | .quitting</p> : null}
      {showMore ? (
        <>
          {more.map((el) => (
            <p>{el}</p>
          ))}
        </>
      ) : null}
    </section>
  );
};

export default About;
