import { more } from "../Data/data";

const More = () => {
  return (
    <>
      {more.map((el) => (
        <p>{el}</p>
      ))}
    </>
  );
};

export default More;
