import { educationArr } from "../Data/data";

const Education = () => {
  return (
    <>
      <p className="pb-3 border-b-2 text-xl my-5">EDUCATION/CERTIFICATIONS:</p>
      {educationArr.map((el) => {
        return <p className="w-full bg-gray-200 mt-5">{el}</p>;
      })}
    </>
  );
};

export default Education;
