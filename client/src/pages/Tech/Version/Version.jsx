import { FaGitSquare, FaGithub } from "react-icons/fa";
import { classes } from "../classes";

const Version = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <FaGitSquare />
      </p>
      <p>Git</p>
      <p>
        Proficient in Git's core concepts such as branching, merging, and
        committing, I ensure smooth and organized code development. I am
        experienced in utilizing Git for tracking changes, creating and managing
        branches, and resolving merge conflicts. Additionally, I am well-versed
        in leveraging Git's collaboration features, including push and pull
        requests, to facilitate seamless teamwork and code reviews. With a deep
        understanding of Git workflows such as Gitflow or feature branching, I
        establish efficient development processes and ensure code quality and
        version control. Through my knowledge and expertise in Git, I contribute
        to streamlined and effective code management and collaboration within
        development projects.
      </p>
      <hr></hr>
      {/*  */}
      <p className=" text-8xl">
        <FaGithub />
      </p>
      <p>Github</p>
      <p>
        With extensive experience in GitHub, a widely-used web-based hosting
        service for version control using Git, I excel in leveraging its
        features for efficient collaboration and project management. Proficient
        in creating repositories, branching strategies, and pull requests, I
        effectively manage and track code changes. I am skilled in utilizing
        GitHub's issue tracking system to facilitate task management and bug
        tracking, ensuring a smooth development workflow. Additionally, I am
        experienced in leveraging GitHub's collaboration features, such as code
        reviews and team collaboration, to foster effective teamwork and ensure
        code quality.
      </p>
      <hr></hr>
    </div>
  );
};

export default Version;
