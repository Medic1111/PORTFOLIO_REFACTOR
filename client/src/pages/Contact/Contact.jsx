import { useState, useEffect } from "react";
import { classes } from "./classes";
import Connetion from "./Connection/Connection";
import axios from "axios";

const initialState = {
  subject: "",
  email: "",
  body: "",
};

const Contact = () => {
  const [showConnect, setShowConnect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userInput, setUserInput] = useState(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    return setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const playAudio = async (e) => {
    e.preventDefault();
    setShowFeedback(false);
    const toRef = setTimeout(() => {
      setShowConnect(true);
      clearTimeout(toRef);
    }, 1000);

    await axios
      .post("/api/v1/notification", userInput)
      .then((serverRes) => {
        setSuccess(true);
        setUserInput(initialState);
      })
      .catch((err) => setSuccess(false));
  };

  useEffect(() => {
    if (showConnect) {
      const toRef = setTimeout(() => {
        setShowConnect(false);
        setShowFeedback(true);
        clearTimeout(toRef);
      }, 4500);
    }
  }, [showConnect]);

  return (
    <>
      {!showConnect ? (
        <section className={classes.section}>
          <form className={classes.form}>
            <p className={classes.p}>To: paganowebdev@gmail</p>
            <p className={classes.p}>
              From:{" "}
              <input
                placeholder="electronic mail"
                className=" bg-light outline-none"
                type="email"
                name="email"
                value={userInput.email}
                onChange={onInputChange}
                required
              />
            </p>
            <p className={classes.p}>
              Subject:{" "}
              <input
                placeholder="schedule coffee"
                className="bg-light outline-none"
                type="text"
                name="subject"
                value={userInput.subject}
                onChange={onInputChange}
                required
              />
            </p>
            <textarea
              name="body"
              placeholder="body"
              className={classes.txtArea}
              value={userInput.body}
              onChange={onInputChange}
              required
            ></textarea>
            <div>
              <button onClick={playAudio} className={classes.btn}>
                ➤
              </button>
              {showFeedback && (
                <span className="ml-2">
                  {success ? "EMAIL SENT" : "FAILED"}
                </span>
              )}
            </div>
          </form>
        </section>
      ) : (
        <Connetion />
      )}
    </>
  );
};

export default Contact;
