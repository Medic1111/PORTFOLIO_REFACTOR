const Connetion = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <p className={"text-5xl md:text-8xl"}>📞...📨</p>
      <audio autoPlay>
        <source src="dial.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Connetion;
