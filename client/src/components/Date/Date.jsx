const DateCal = () => {
  return (
    <div className={"flex items-center justify-center gap-1"}>
      <p>
        {new Date().getMonth() +
          1 +
          "/" +
          new Date().getDate() +
          "/" +
          new Date().getFullYear()}
      </p>
    </div>
  );
};

export default DateCal;
