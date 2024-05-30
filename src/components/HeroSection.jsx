import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <>
      {/* title */}
      <div className="items-center flex flex-col mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {""} for developers
          </span>
        </h1>
        {/* text */}
        <p className="text-center mt-10 max-w-4xl text-neutral-500">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        {/* button */}
        <div className="mt-10 space-x-8 items-center justify-center">
          <a
            className="border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3"
            href=""
          >
            Start for free
          </a>
          <a className="border rounded-md py-2 px-3" href="">
            Documentation
          </a>
        </div>
        {/* video */}
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="w-1/2 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
