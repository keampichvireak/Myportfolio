"use client";
import React, { useRef } from "react";
import "./Brief.css";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import {
  Playwrite_AU_SA,
  Roboto_Mono,
  Reddit_Mono,
  Anton,
} from "next/font/google";

const items = [
  {
    id: 1,
    skill: "HTML",
  },
  {
    id: 2,
    skill: "CSS",
  },
  {
    id: 3,
    skill: "php",
  },
  {
    id: 4,
    skill: "JAVASCRIPT",
  },
  {
    id: 5,
    skill: "NEXT JS",
  },
  {
    id: 6,
    skill: "PYTHON",
  },
  {
    id: 7,
    skill: "NODE JS",
  },
  {
    id: 8,
    skill: "REACT JS",
  },
];

const playwrite = Playwrite_AU_SA({
  weight: "400",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const reddit_mono = Reddit_Mono({
  weight: "300",
  subsets: ["latin"],
});
const roboto_mono = Roboto_Mono({
  weight: "300",
  subsets: ["latin"],
});

const Brief = () => {
  const skillVariants = {
    initial: {
      x: 600,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
        // Works if you have children to stagger
      },
    },
  };

  const textVariants = {
    initial: {
      x: -300,
      y: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        staggerChildren: 0.4,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="brief" ref={ref}>
      <div className="firstsec">
        <h1 className={`firsttitle ${anton.className}`}>About me ?</h1>
        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="description"
        >
          <motion.p
            variants={textVariants}
            className={`${roboto_mono.className}`}
          >
            Hello again! You can call me Vireak either Pich. I am a graduate
            from the{" "}
            <b
              className="boldtext"
              style={{ fontFamily: "cursive", fontWeight: "bold" }}
            >
              National University of Battambang
            </b>
            , specializing in Web Development. I completed my studies at a local
            university in Battambang.
          </motion.p>
          <br />
          <motion.p
            variants={textVariants}
            className={`${roboto_mono.className}`}
          >
            During my second year, I was unsure about my future career and was
            searching for the right path. However, midway through my journey, I
            became deeply involved in a{" "}
            <b style={{ fontFamily: "cursive", fontWeight: "bold" }}>
              web development
            </b>{" "}
            project for one of my assignments. This sparked a strong interest in
            web development, particularly in understanding how to control web
            processes and behaviors on the internet.
          </motion.p>
          <br />
          <motion.p
            variants={textVariants}
            className={`${roboto_mono.className}`}
          >
            In May 2024, I joined the C4C bootcamp, which provided me with
            valuable knowledge in cloud architecture, especially with{" "}
            <b
              style={{ fontFamily: "cursive", fontWeight: "bold" }}
              className="boldtext"
            >
              Amazon Web Services
            </b>{" "}
            (AWS). This experience helped me immerse myself in the fundamentals
            of cloud engineering, and I was amazed at how{" "}
            <b
              style={{ fontFamily: "cursive", fontWeight: "bold" }}
              className="boldtext"
            >
              cloud services
            </b>{" "}
            can optimize our work as developers.
          </motion.p>
        </motion.div>
        <div className="skill">My skill :</div>
        <motion.div
          className="skillCategory"
          variants={skillVariants}
          animate={isInView ? "animate" : "initial"}
        >
          {items.map((item) => (
            <motion.button
              variants={skillVariants}
              className={`skillbutton ${playwrite.className}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.7, rotate: 10 }}
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info) => {
                // Reset to initial position after drag ends
                info.point.x = 0;
                info.point.y = 0;
              }}
              key={item.id}
            >
              {item.skill}
            </motion.button>
          ))}
        </motion.div>
      </div>
      <div className="secondsec">
        <div className="profilepic">
          <Image
            src="/6.jpg"
            alt="Profile"
            className="profile"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default Brief;
