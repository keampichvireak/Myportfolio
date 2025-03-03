"use client";
import React from "react";
import "./impression.css";
import AnimatedPicture from "../Animation/animation";
import { Caveat, Roboto_Mono, Anton, Reddit_Mono } from "next/font/google";
import Image from "next/image";
const caveat = Caveat({
  weight: "500",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const roboto_mono = Roboto_Mono({
  weight: "300",
  subsets: ["latin"],
});
const Impression = () => {
  return (
    <div className="impression">
      <div className="nav">
        <div className="logo">
          <Image
            src="/logo.png"
            style={{ borderRadius: "10px" }}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="midnav">
          <p
            onClick={() => {
              const section = document.getElementById("#first");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`navtext ${caveat.className}`}
          >
            Impression |{" "}
          </p>
          <p
            onClick={() => {
              const section = document.getElementById("#second");
              if (section) [section.scrollIntoView({ behavior: "smooth" })];
            }}
            className={`navtext ${caveat.className}`}
          >
            About me |
          </p>
          <p className={`navtext ${caveat.className}`}>Portfolio | </p>
        </div>
        <div>
          <button
            onClick={() => {
              const section = document.getElementById("#fourth");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`navtext px-12 py-3 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 ${caveat.className}`}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="secondsec">
        <div className="desc">
          <p className={`title  ${anton.className}`}>Me?</p>
          <h3 className="subtitle">Aspiring Backend Developer</h3>
          <p className={`text ${roboto_mono.className}`}>
            Hi, I’m Vireak, an IT graduate from the National University of
            Battambang with a passion for backend development. I’m seeking a
            Backend Developer internship to grow my skills and contribute to
            impactful projects.
          </p>
        </div>
        <div className="Galaxy">
          <AnimatedPicture />
        </div>
      </div>
    </div>
  );
};

export default Impression;
