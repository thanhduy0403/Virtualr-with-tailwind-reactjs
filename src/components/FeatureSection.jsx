import React from "react";
import { features } from "../constants";
function FeatureSection() {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="uppercase text-orange-500 bg-neutral-900 rounded-full py-2 px-3 h-6 text-sm font-medium">
            Feature
          </span>
          <h2 className="text-while mt-10 lg:text-6xl text-3xl sm:text-5xl lg:mt-20 tracking-wide  ">
            Easily build{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text  ">
              your code
            </span>
          </h2>
        </div>
        {/* infor */}
        <div className=" flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div className="flex w-full lg:w-1/3" key={index}>
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 rounded-full text-orange-500 bg-neutral-900 items-center justify-center">
                  {feature.icon}
                </div>
                <div className="mb-20">
                  <h5 className="mt-1 mb-6 text-xl ">{feature.text}</h5>
                  <p className="text-neutral-500 text-md pmp-2 ">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
