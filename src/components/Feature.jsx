import React from "react";
import bgImage from "../assets/Background.jpg";

const Feature = () => {
  return (
    <div className="relative min-h-screen w-full px-5 py-20 ">
      {/* card */}
      <div className="flex flex-col  items-center px-4 text-3xl md:px-8 md:text-4xl">
        <h1 className="mb-10 font-bold ">Features</h1>

        {/* white board */}
        <div className="grid w-full grid-cols-1 gap-6 rounded-3xl border border-gray-600 bg-white px-14 py-10 text-xl transition-all duration-500 ease-in-out md:grid-cols-3 md:rounded-[40px] md:px-16 md:text-2xl">
          <div className="grid-cols [80px_1fr] grid grid-flow-col gap-4 md:grid-flow-row  md:flex-col">
            <div className=" grid place-items-center">
              <div className="h-20 w-20 rounded-full bg-gray-300 blur-xl md:h-32 md:w-32" />
            </div>
            <h1 className="text-left md:text-center">
              Create your card in just 5 mins
            </h1>
          </div>
          <div className="grid-cols[80px_1fr] grid grid-flow-col gap-4 md:grid-flow-row md:flex-col">
            <div className=" grid place-items-center">
              <div className="h-20 w-20 self-center rounded-full bg-gray-300 blur-xl md:h-32 md:w-32" />
            </div>
            <h1 className=" text-left md:text-center">
              Customize the Text with "Edit this Page" Option
            </h1>
          </div>
          <div className="grid-cols[80px_1fr] grid grid-flow-col gap-4  md:grid-flow-row  md:flex-col">
            <div className=" grid place-items-center">
              <div className="h-20 w-20 rounded-full bg-gray-300 blur-xl md:h-32 md:w-32" />
            </div>
            <h1 className=" text-left md:text-center">
              Editing is available after purchase also
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
