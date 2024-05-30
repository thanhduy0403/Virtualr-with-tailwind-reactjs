import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
function Navbar() {
  const [navOpen, setNavOpen] = useState(true);
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50  py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center flex-shrink-0">
              <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            {/* navItems */}
            <ul className="hidden lg:flex ml-14 space-x-12 ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}> {item.label}</a>
                </li>
              ))}
            </ul>
            {/* acccount */}
            <div className=" hidden lg:flex space-x-14 items-center justify-center">
              <a className="border rounded-md py-2 px-3" href="#">
                Sign In
              </a>
              <a
                className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                href="#"
              >
                {" "}
                Create an account
              </a>
            </div>
            {/* icon for mobile */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {navOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {/* using mobile  */}
          {navOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li className="py-4" key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a className="border rounded-md py-2 px-3" href="#">
                  {" "}
                  Sign In
                </a>
                <a
                  className=" py-2 px-3  bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
                  href="#"
                >
                  {" "}
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
