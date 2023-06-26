import { FaGithubAlt, FaJira } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { classes } from "../classes";

const Flow = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <DiScrum />
      </p>
      <p>SCRUM/Agile</p>
      <p>
        Proficient in practicing Agile principles, I effectively contribute to
        cross-functional teams, embracing adaptive planning, continuous
        improvement, and iterative development cycles. I am skilled in
        participating in Agile ceremonies such as sprint planning, daily
        stand-ups, sprint reviews, and retrospectives, fostering transparent
        communication, and ensuring alignment with project goals. As a
        developer, I embrace the Agile mindset, prioritizing customer
        collaboration, responding to changing requirements, and delivering value
        in each sprint. I am experienced in breaking down user stories into
        actionable tasks, estimating effort, and tracking progress using Agile
        project management tools. With a deep understanding of SCRUM/Agile
        practices, I contribute to successful project delivery, promote team
        productivity, and facilitate the delivery of high-quality software
        solutions.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <FaGithubAlt />
      </p>
      <p>Github Projects</p>
      <p>
        I excel in effectively organizing and managing software development
        projects. Proficient in creating and managing project boards, I utilize
        GitHub Projects to track tasks, issues, and milestones, providing a
        visual representation of project progress. I am comfortable in creating
        and managing project cards, assigning them to team members, and tracking
        their status through customizable workflows. Additionally, I have
        experience in leveraging GitHub Projects' automation features, such as
        automatically moving cards based on pull request status or issue labels.
        With a deep understanding of GitHub Projects' collaboration
        capabilities, I facilitate effective team coordination, streamline
        project workflows, and ensure timely delivery of milestones.
      </p>
      <hr></hr>
      {/*  */}
      {/* <p className=" text-8xl">
        <FaJira />
      </p>
      <p>Jira</p>
      <p>
        Primary language. Functional and OOP approach with solid foundation on
        HOF, IIF, closures, hoisting, recursion, and other advanced features.
      </p>
      <hr></hr> */}
    </div>
  );
};

export default Flow;
