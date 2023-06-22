import { techArr } from "../Data/data";

const Skills = () => {
  return (
    <>
      <p className="pb-3 border-b-2  text-xl my-5">SKILLS:</p>
      <ul className="pb-3 border-b-2  my-5 flex items-center justify-start flex-wrap">
        {techArr.map((el) => (
          <li className="my-1">{el}</li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
