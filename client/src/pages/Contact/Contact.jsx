import { classes } from "./classes";

const Contact = () => {
  return (
    <section className={classes.section}>
      <form className={classes.form}>
        <p className={classes.p}>To: paganowebdev@gmail</p>
        <p className={classes.p}>
          From:{" "}
          <input
            placeholder="electronic mail"
            className=" bg-light outline-none"
            type="email"
          />
        </p>
        <p className={classes.p}>
          Subject:{" "}
          <input
            placeholder="schedule coffee"
            className="bg-light outline-none"
            type="text"
          />
        </p>
        <textarea placeholder="body" className={classes.txtArea}></textarea>
        <button className={classes.btn}>➤</button>
      </form>
    </section>
  );
};

export default Contact;
