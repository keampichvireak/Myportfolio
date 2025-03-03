"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React, { useRef } from "react";
import "./contact.css";
import { motion, useInView } from "motion/react";
function Contact() {
  const formVariants = {
    initial: {
      x: -100,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const words = [
    {
      text: "Reach",
    },
    {
      text: "out",
    },
    {
      text: "and",
    },

    {
      text: "connect!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="mt-64 overflow-x-hidden w-full h-full flex justify-center items-center z-30 ">
      {/* FORM */}
      <div className="flex justify-around gap-5">
        <motion.div
          ref={ref}
          variants={formVariants}
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col  flex-[3] w-full "
        >
          <div className=" mt-20 flex  justify-center flex-col rounded-3xl items-center w-full mx-auto shadow-lg p-8 sm:w-[500px]">
            {/* <h1 className="text-[40px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> */}
            {/* <h1 className="text-[40px] bg- bg-clip-text text-transparent">
              <b>Say Hello</b>
            </h1> */}

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">How can we call you?</span>
              </div>
              <input
                type="text"
                // placeholder="Type here"
                className=" mt-3 input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email : </span>
              </div>
              <input
                type="text"
                // placeholder="Type here"
                className=" mt-3 input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Subject :</span>
              </div>
              <input
                type="text"
                // placeholder="Type here"
                className="mt-3 input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Text area */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Write here :</span>
              </div>
              <textarea
                className=" mt-3 textarea textarea-bordered h-32 w-[320px]"
                // placeholder="Bio"
              ></textarea>
            </label>
            <button className="p-[1px] relative mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-lg" />
              <div
                className="px-8 py-2  bg-coral rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
                style={{ fontFamily: "cursive" }}
              >
                Contact
              </div>
            </button>
          </div>
        </motion.div>
        <div className=" sm:hidden hide-at-850px md:flex flex-[2] justify-center items-center show-at-966px  ">
          <div className="flex flex-col items-center justify-center h-[40rem] text-white  hide-at-965px">
            <TypewriterEffectSmooth words={words} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
