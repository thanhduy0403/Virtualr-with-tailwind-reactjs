import React from "react";
import { testimonials } from "../constants/index";
function Testimonials() {
  return (
    <>
      <div className="mt-20 tracking-wide">
        <h2 className="text-center text-3xl lg:text-5xl sm:text-4xl my-20 lg:my-20 ">
          What people are saying{" "}
        </h2>
        <div className="flex flex-wrap justify-center  ">
          {testimonials.map((testimonial, index) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 gap-4 px-4 py-2"
              key={index}
            >
              <div className=" border border-neutral-800 bg-neutral-900 font-thin p-6 rounded-md ">
                <p>{testimonial.text}</p>
                <div className=" flex items-start mt-8">
                  <img
                    className="w-10 h-10 rounded-full mr-6 border border-neutral-500"
                    src={testimonial.image}
                    alt=""
                  />
                  <div>
                    <h6 className="">{testimonial.user}</h6>
                    <span className="text-neutral-400">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
