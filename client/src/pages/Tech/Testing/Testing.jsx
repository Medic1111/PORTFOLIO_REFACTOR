import { SiJest, SiJasmine } from "react-icons/si";
import { classes } from "../classes";

const Testing = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <SiJest />
      </p>
      <p>Jest.js</p>
      <p>
        Comfortable in setting up test suites, writing test cases, and
        generating code coverage reports to ensure high code quality and
        identify potential issues. Additionally, I have experience in utilizing
        Jest for endpoint testing, simulating HTTP requests and validating
        responses. I can effectively test API endpoints, ensuring proper request
        handling, response formatting, and error handling. With a deep
        understanding of Jest's testing utilities and configuration options, I
        deliver reliable and well-tested applications, providing confidence in
        the codebase and promoting a culture of quality-driven development.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <SiJasmine />
      </p>
      <p>Jasmine</p>
      <p>
        Comfortable in defining test suites and writing expressive test cases
        using Jasmine's descriptive syntax, I thoroughly validate individual
        units of code, including functions, modules, and components. I am
        skilled in utilizing Jasmine's powerful assertion library to define
        expectations and assertions, ensuring correct behavior and proper
        functionality.
      </p>
      <hr></hr>
    </div>
  );
};

export default Testing;
