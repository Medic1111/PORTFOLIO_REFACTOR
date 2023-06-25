import { useState, useEffect } from "react";
import { classes } from "./classes";
const Contact = () => {
  const [showConnect, setShowConnect] = useState(false);

  const playAudio = (e) => {
    e.preventDefault();

    const toRef = setTimeout(() => {
      clearTimeout(toRef);
      setShowConnect(true);
    }, 1000);
  };

  useEffect(() => {
    if (showConnect) {
      const toRef = setTimeout(() => {
        setShowConnect(false);
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

            <button onClick={playAudio} className={classes.btn}>
              ➤
            </button>
          </form>
        </section>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <p className={"text-5xl md:text-8xl"}>📞...📨</p>
          <audio autoPlay>
            <source src="dial.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}
    </>
  );
};

export default Contact;
