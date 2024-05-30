import React from "react";
import imgcode from "../assets/code.jpg";
import { checklistItems } from "../constants/index";
import { CheckCircle2 } from "lucide-react";

function Workflow() {
  return (
    <>
      <div className="mt-20">
        {/* title */}
        <h2 className="text-3xl lg:text-6xl sm:text-6xl text-center tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            coding workflow.
          </span>
        </h2>
        {/* img and infor */}
        <div className="flex flex-wrap justify-center">
          {/* img */}
          <div className="p-2 w-full lg:w-1/2">
            <img src={imgcode} alt="imgcode" />
          </div>
          {/* infor */}
          <div className="mt-5 w-full lg:w-1/2 ">
            {checklistItems.map((checklistItem, index) => (
              <div key={index} className="flex mb-10">
                {/* icon */}
                <div className="text-green-500  bg-neutral-900  h-10 w-10  rounded-full p-2">
                  <CheckCircle2 />
                </div>
                {/* content */}
                <div className="ml-5 mt-1">
                  <h5 className="text-xl">{checklistItem.title}</h5>
                  <p className="text-neutral-600 text-md">
                    {checklistItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
