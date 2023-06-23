const DateCal = () => {
  return (
    <div className={"flex items-center justify-center gap-1"}>
      <p>
        {new Date().getMonth() +
          1 +
          "/" +
          new Date().getDate() +
          "/" +
          String(new Date().getFullYear()).slice(2)}
      </p>
    </div>
  );
};

export default DateCal;
