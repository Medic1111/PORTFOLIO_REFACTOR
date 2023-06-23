const Contact = () => {
  return (
    <section className="w-full h-full">
      <form className="w-full h-full gap-1 bg-darker flex flex-col items-start justify-start p-1">
        <p className=" bg-light w-full border-2 border-borderGray">
          To: paganowebdev@gmail
        </p>
        <p className=" bg-light w-full border-2 border-borderGray">
          From:{" "}
          <input
            placeholder="electronic mail"
            className=" bg-light outline-none"
            type="email"
          />
        </p>
        <p className="bg-light w-full border-2 border-borderGray">
          Subject:{" "}
          <input
            placeholder="schedule coffee"
            className="bg-light outline-none"
            type="text"
          />
        </p>
        <textarea
          placeholder="body"
          className=" bg-light border-2 border-borderGray w-full h-[80%] outline-none"
        ></textarea>
        <button className="text-3xl  pl-3 pr-3 text-start  border-2 border-borderGray">
          ➤
        </button>
      </form>
    </section>
  );
};

export default Contact;
