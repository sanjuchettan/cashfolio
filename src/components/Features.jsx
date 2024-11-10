import React from "react";
import Signal from "../images/signal.jpg";
import Teaching from "../images/teaching.jpg";
import Analytics from "../images/analytics.jpg";

const Features = () => {
  const features = [
    {
      img: Signal,
      title: "Real-Time Market Data",
      description:
        "Get real-time Indian stock market data and insights into the evolving cryptocurrency market to make high-confidence trades.",
    },
    {
      img: Teaching,
      title: "Educational Resources",
      description:
        "Access tutorials, webinars, and expert insights to master the markets and trade safely with confidence.",
    },
    {
      img: Analytics,
      title: "24/7 Customer Support",
      description:
        "Enjoy dedicated support for every step of your trading journey with our 24/7 customer support team.",
    },
  ];

  return (
    <div className="w-full bg-[#121212] py-20 px-6 text-white">
      <div className="max-w-[1240px] mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00df9a] to-[#00bf82] bg-clip-text text-transparent">
          Our Features
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the tools and resources that will help you succeed in your
          trading journey
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 mx-auto max-w-[1240px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              className="w-full h-[300px] object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300"
              src={feature.img}
              alt={feature.title}
            />
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold py-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
