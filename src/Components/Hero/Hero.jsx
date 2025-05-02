import React, { useEffect, useState } from "react";
import heroRobo from "../../assets/HeroRobo.png";
import roboFront from "../../assets/RoboFront.png";
import robotImg from "../../assets/robotIMg.png";
import heroIcon1 from "../../assets/h1.png";
import heroIcon2 from "../../assets/h2.png";

const Hero = () => {
  const [userCount, setUserCount] = useState(0);
  const [providedUserCount, setProvidedUserCount] = useState(0);

  //   Protect Count Stats
  useEffect(() => {
    const target = 2000;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50); // Increment every 50ms

    const counter = setInterval(() => {
      setUserCount((prev) => {
        if (prev >= target) {
          clearInterval(counter);
          return target;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(counter); // Cleanup on unmount
  }, []);
  //   Provided Count Stats
  useEffect(() => {
    const target = 7002;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50); // Increment every 50ms

    const counter = setInterval(() => {
      setProvidedUserCount((prev) => {
        if (prev >= target) {
          clearInterval(counter);
          return target;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(counter); // Cleanup on unmount
  }, []);
  return (
    <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left */}
      <div class="w-full h-full my-10 text-center md:text-left space-y-5">
        <h1 className="text-5xl sm:text-4xl md:text-6xl font-medium text-Secondary font-Mrp">
          Your AI-<br className="hidden md:flex"></br>Powered{" "}
          <br className="hidden md:flex" /> Sales Coach
        </h1>
        <div className="flex gap-3 flex-col lg:flex-row justify-center md:justify-start items-center">
          <img
            src={robotImg}
            alt=""
            className="w-[150px] h-[150px] object-fill"
          />
          <p className="text-AllParaText font-Mrp w-full">
            Get real-time coaching, script suggestions, and deal-closing
            strategies powered by advanced AI technology.
          </p>
        </div>
        {/* Stats */}
        <div className="w-full flex items-center justify-center md:justify-start gap-5">
          <div className="flex items-center justify-between">
            <span className=" font-bold text-Primary rounded-2xl bg-white p-2">
              <img src={heroIcon1} alt="" className="animate-bounce w-[33px] h-[33px] object-fill"/>
            </span>
            <span className="text-3xl md:text-2xl lg:text-3xl font-bold text-Primary ">
              {Math.floor(userCount)}+ {/* Display the animated count */}
              <p className="text-AllParaText text-sm font-Mrp whitespace-nowrap">
                Your protection
              </p>
            </span>
          </div>
          {/* Next */}
          <div className="flex items-center justify-between">
            <span className=" font-bold text-Primary rounded-2xl bg-white p-2">
              <img src={heroIcon2} alt="" className="animate-bounce w-[33px] h-[33px] object-fill" />
            </span>
            <span className="text-3xl md:text-2xl lg:text-3xl font-bold text-Primary ">
              {Math.floor(providedUserCount)}+{" "}
              {/* Display the animated count */}
              <p className="text-AllParaText text-sm font-Mrp whitespace-nowrap">
                Provide Tailored
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* Right */}
      <div class="relative w-full h-full my-10 flex justify-end items-center">
        <img src={heroRobo} alt="" className="image1" />
        <img
          src={roboFront}
          alt=""
          className="image2 scale-[70%] absolute -bottom-10 -left-8 sm:-left-[6rem] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
