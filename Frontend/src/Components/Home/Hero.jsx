import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br  from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left content */}
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase font-semibold tracking-wide">
            We have 24/7 supported team
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Best Invest Company <br /> Since 2011
          </h1>
          <p className="text-lg text-gray-200">
            Compresensive financial advice and investment. services that are
            tailored to meet your individual needs. We are here because we are
            passionate aboutt open. transparent markets ard aim lo be a major
            driving force in widespread adoption, we are the first and the best
            in investment management
          </p>
          <button className=" bg-pink-700 w-18  h-8 font-bold rounded  ">
            Register
          </button><button className=" ml-12 bg-pink-700 w-16  h-8 font-bold rounded "> Login</button>
         {" "}
        </div>

        {/* Right image (replace with your illustration) */}
        <div className="flex-1 animate-pulse mt-10 md:mt-0 flex justify-center">
          <img
            src="https://globalprimeinvest.org/public/images/banner/front.png"
            alt="Illustration"
            className="w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
