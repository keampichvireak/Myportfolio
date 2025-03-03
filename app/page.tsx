"use client";
import Image from "next/image";

import AnimatedPicture from "./components/Animation/animation";
import MyComponent from "./components/Test/MyComponent";
import ScrollComponent from "./components/Test/MyComponent";
import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
const Impression = lazy(() => import("@/app/components/impression/impression"));
const Brief = lazy(() => import("@/app/components/Brief/Brief"));
const Portfolio = lazy(() => import("@/app/components/Portfolio/Portfolio"));
const Contact = lazy(() => import("@/app/components/Contact/Contact"));

export default function Home() {
  return (
    <div className="container">
      <Suspense>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#first">
            <Impression />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#second">
            <Brief />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <Portfolio />
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#fourth">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
}
