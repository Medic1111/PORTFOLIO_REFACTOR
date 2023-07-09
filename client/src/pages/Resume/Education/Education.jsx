import { educationArr } from "../Data/data";

const Education = () => {
  return (
    <>
      <p className="pb-3 border-b-2 text-xl my-5">EDUCATION:</p>
      {educationArr.map((el, index) => {
        return (
          <p key={`EDU_${index}`} className="w-full bg-gray-200 mt-5">
            {el}
          </p>
        );
      })}
    </>
  );
};

export default Education;
