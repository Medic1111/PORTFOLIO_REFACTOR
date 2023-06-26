import { DiMongodb } from "react-icons/di";
import { classes } from "../classes";

const Data_Base = () => {
  return (
    <div className={classes.techListBox}>
      <p className=" text-8xl">
        <DiMongodb />
      </p>
      <p>MongoDB</p>
      <p>
        I am adept at working with NoSQL databases and designing data models for
        scalable and efficient applications. Leveraging Mongoose, a powerful
        object modeling tool for MongoDB, I ensure seamless integration and
        effective interaction with the database. I excel in defining schemas,
        creating models, and implementing data validation and querying using
        Mongoose's rich set of features. With a deep understanding of MongoDB's
        document-based architecture, I optimize database performance and design
        data structures that align with the application's requirements.
        Additionally, I am proficient in handling complex data relationships,
        embedding documents, and utilizing Mongoose's middleware for pre and
        post-processing data operations.
      </p>
      <hr></hr>
    </div>
  );
};

export default Data_Base;
