import { more } from "../Data/data";

const More = () => {
  return (
    <>
      {more.map((el, index) => (
        <p key={`MORE_${index}`}>{el}</p>
      ))}
    </>
  );
};

export default More;
