import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Featured = () => {
  useGSAP(() => {
    gsap.to("#image_box", {
      y: -20,
      yoyo: true,
      duration: 1,
      ease: "linear",
    });
  }, []);
  useGSAP(() => {
    gsap.to("#feature_text", {
      x: -10,
      yoyo: true,
      duration: 1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="max-container">
      <h1 className="w-full font-Roboto text-left text-8xl max-lg:text-3xl">
        <b className="text-coral-red">Hey, I am here!</b> Discover my stories
        and creative ideas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[60px] gap-4 items-center">
        <div id="image_box" className=" relative flex-1 flex h-[700px]">
          <img
            id="image"
            src="/culture2.jpg"
            alt="hero"
            className="object-cover w-full"
          />
        </div>
        <div
          id="feature_text"
          className="text flex-1 flex flex-col gap-[20px] bg-lightcriBlue p-4"
        >
          <h1 className=" text-[40px] font-Roboto">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="description text-[20px] text-gray-500 font-Montserrat leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            asperiores, repellat omnis, modi distinctio blanditiis perspiciatis
            recusandae eius non veritatis aspernatur explicabo sint praesentium
            porro laudantium debitis expedita at mollitia.
          </p>
          <button className="p-3 text-coral-white bg-criBlue hover:bg-blue-300 w-max">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
