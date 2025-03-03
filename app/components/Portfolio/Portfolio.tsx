"use client";
import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useTransform, useScroll, useInView } from "motion/react";
import { Cutive_Mono, Jersey_10 } from "next/font/google";
const items = [
  {
    id: 1,
    img: "/4.png",
    title: "POS System",
    desc: "This project was my thesis project. It revolves around developing a comprehensive post system for a computer shop in my local area. The scope of the project includes both a user interface and an admin interface. The user interface is designed to be intuitive and user-friendly, enabling customers to easily navigate, make purchases, and interact with the system. On the other hand, the admin interface is robust and feature-rich, providing shop administrators with the tools they need to manage inventory, track orders, handle customer inquiries, and generate reports. The aim of this project is to streamline the operations of the computer shop, enhance customer experience, and improve overall efficiency. ",
    link: "/",
  },
  {
    id: 2,
    img: "/5.png",
    title: "Travel blog ",
    desc: "This website is dedicated to travel blogging and documenting journeys. It features a sophisticated design that showcases various travel experiences, tips, and unique perspectives. Visitors will find beautiful pictures and detailed descriptions of each destination, making it a visual and informative delight for travel enthusiasts. The goal is to inspire and guide travelers by sharing insightful stories and practical advice. ",
    link: "/",
  },

  {
    id: 3,
    img: "/6.png",
    title: "Todo List X Firebase",
    desc: "This to-do list application is integrated with Google Firebase, offering users a comprehensive set of features they might need for managing their daily tasks. The app includes functionalities such as task creation, editing, deletion, and categorization to ensure a smooth and efficient workflow. By connecting to the Google Firebase database, the app guarantees that all user data is securely stored and synchronized in real-time. This provides users with peace of mind, knowing their information is safe and accessible across multiple devices.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    opacity: 0,
    x: -500,
    y: 500,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

const cutive_mono = Cutive_Mono({
  weight: "400",
  subsets: ["latin"],
});
const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const ListItem = ({ item }: any) => {
  const customStyles = item.id === 3 ? { width: "300px", height: "700px" } : {};
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg "
        style={customStyles}
      >
        <img src={item.img} alt="" style={{ objectFit: "contain" }} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants} className={`${jersey.className}`}>
          {item.title}
        </motion.h1>
        <motion.p
          variants={textVariants}
          className={`${cutive_mono.className}`}
        >
          {item.desc}
        </motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View Code
            </span>
          </button>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);
  const { scrollYProgress } = useScroll({ target: ref });
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <div className="pProgress"></div>
    </div>
  );
};

export default Portfolio;
