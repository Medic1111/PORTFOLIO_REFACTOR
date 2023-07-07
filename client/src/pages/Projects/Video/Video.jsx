const Video = ({ title }) => {
  if (title === "nomad-me") {
    return (
      <video
        className="w-full border-2 border-gray-800 max-h-[25em]"
        controls
        autoPlay
        muted
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688749395/demo_gwitxv.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688749395/demo_gwitxv.mp4"
          type="video/ogg"
        />
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688749395/demo_gwitxv.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (title === "food-QR") {
    return (
      <video
        className="w-full border-2 border-gray-800 max-h-[25em]"
        controls
        autoPlay
        muted
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688752139/food_gbwkk8.mov"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688752139/food_gbwkk8.mov"
          type="video/ogg"
        />
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688752139/food_gbwkk8.mov"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (title === "m11-studio") {
    return (
      <video
        className="w-full border-2 border-gray-800 max-h-[25em]"
        controls
        autoPlay
        muted
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688749463/m11_mhryrm.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688749463/m11_mhryrm.mp4"
          type="video/ogg"
        />
        <source
          src="https://res.cloudinary.com/dfid6vhes/video/upload/v1688749463/m11_mhryrm.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    );
  }
};

export default Video;
