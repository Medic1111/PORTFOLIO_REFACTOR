import { SiExpress } from "react-icons/si";
import { DiNodejs, DiNodejsSmall } from "react-icons/di";
import { classes } from "../classes";

const Back = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <DiNodejsSmall />
      </p>
      <p>Node.js</p>
      <p>
        Utilizing Node Package Manager (NPM) for efficient package management, I
        integrate third-party libraries seamlessly. My proficiency in
        asynchronous programming allows me to handle complex operations using
        callbacks, Promises, and async/await, ensuring clean and maintainable
        code. With a focus on testing and debugging using frameworks like
        Supertest and Jest, I ensure the reliability and quality of Node.js
        applications. I am skilled in harnessing the power of Node.js to create
        efficient and high-performing server-side solutions.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-7xl">
        <SiExpress />
      </p>
      <p>Express.js</p>
      <p>
        A versatile and powerful web application framework for Node.js I use to
        excel in building robust and feature-rich web applications. Leveraging
        Express.js, I adeptly handle routing, request handling, and response
        management, employing its flexible middleware architecture. Proficient
        in RESTful API development, I design and implement APIs adhering to
        industry best practices, ensuring resourceful routing, proper HTTP
        status codes, and seamless integration of JSON data. My expertise
        extends to implementing error handling mechanisms and custom middleware
        to enhance error management and application flow. Additionally, I excel
        in writing unit and endpoint tests using Jest and Supertest, ensuring
        the reliability and functionality of Express.js applications.
      </p>
      <hr></hr>
    </div>
  );
};

export default Back;
