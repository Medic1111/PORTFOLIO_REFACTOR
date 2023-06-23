import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { more, prompt } from "./Data/data";

let hasSelected = false;

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [showQuit, setShowQuit] = useState(false);

  const handleKeyDown = (e) => {
    if (!hasSelected) {
      e.key === "y" && setShowMore(true);
      e.key === "n" && setShowQuit(true);
      e.key !== "y" && e.key !== "n" && setShowInvalid(true);
      hasSelected = true;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

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
