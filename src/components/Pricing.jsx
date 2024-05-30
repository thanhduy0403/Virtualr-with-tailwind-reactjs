import React from "react";
import { features, pricingOptions } from "../constants/index";
import { CheckCircle2 } from "lucide-react";
function Pricing() {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl my-8 tracking-wide">
          Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <div className="p-2 w-full sm:w-1/2  lg:w-1/3" key={index}>
              <div className="p-10 border border-neutral-600 rounded-xl">
                <p className="mb-8 text-4xl">
                  {option.title}{" "}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2 ">
                      (More Popular)
                    </span>
                  )}
                </p>
                <p className="mb-8">
                  <span className="text-4xl mt-6">{option.price}</span>
                  <span className="text-neutral-600 tracking-tight">
                    {" "}
                    /Month
                  </span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li className="mt-8 flex items-center" key={index}>
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a className="button_link" href="# ">
                  {" "}
                  Subscribe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pricing;
