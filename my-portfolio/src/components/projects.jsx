import React from "react";
import workin from "../ui/assets/workin.png";
import worke from "../ui/assets/worke.jpg";

const gridItem1 = (
  <div
    style={{ backgroundImage: `url(${worke})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effects */}
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React JS Application
      </span>
      <div className="pt-8 text-center">
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);

const gridItem2 = (
  <div
    style={{ backgroundImage: `url(${workin})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effects */}
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React JS Application
      </span>
      <div className="pt-8 text-center">
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <section
      name="work"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <body className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <header className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Projects
          </p>
          <p className="py-6">Checkout some of my recent projects</p>
        </header>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gridItem1}
          {gridItem2}
          {gridItem1}
        </div>
      </body>
    </section>
  );
};

export default Work;