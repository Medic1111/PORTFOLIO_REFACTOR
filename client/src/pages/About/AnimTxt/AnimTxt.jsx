import { Fade } from "react-awesome-reveal";

const AnimTxt = ({ delay, el }) => {
  return (
    <>
      <Fade triggerOnce delay={delay} duration={50} cascade>
        {el}
      </Fade>
      <br />
    </>
  );
};
// delay={(1000 * index) / 2}
export default AnimTxt;
