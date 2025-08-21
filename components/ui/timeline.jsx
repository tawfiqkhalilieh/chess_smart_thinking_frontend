"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import TrueFocus from "../TrueFocus";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-8 text-white max-w-4xl mx-auto">
          <TrueFocus sentence="Smart chess thinker | Development journey"></TrueFocus>
        </h2>
        <br />
        <br />
        <br />
        <br />
        <p className="text-neutral-200 text-lg md:text-2xl max-w-4xl leading-relaxed font-light mx-auto">
          I built a{" "}
          <span className="text-white font-medium">full-stack application</span>{" "}
          that simulates human-like thinking time in chess. I engineered a{" "}
          <span className="text-white font-medium">HHTP/Web scraper</span> to
          collect timestamped chess games in{" "}
          <span className="text-white font-medium">Go</span>, developed an{" "}
          <span className="text-white font-medium">API in FastAPI</span>,
          trained{" "}
          <span className="text-white font-medium">
            machine learning models in tensorflow
          </span>{" "}
          (regression → sequence models) to predict move timing, and deployed it
          using <span className="text-white font-medium">AWS</span>. The
          frontend shows the project and gives the user a play ground to test
          the model in a chess game, and gives people who find it intresting my
          contact info.This project demonstrates my ability to work across{" "}
          <span className="text-white font-medium">data engineering</span>,
          <span className="text-white font-medium">backend</span>,{" "}
          <span className="text-white font-medium">frontend</span>, and{" "}
          <span className="text-white font-medium">ML pipelines</span>.
        </p>
      </div>

      <br />
      <br />
      <p className="text-neutral-200 text-lg md:text-2xl max-w-4xl leading-relaxed font-light mx-auto">
        <span className="text-red-500 font-medium">
          {" "}
          🚀 Rapid development: Completed in just one week during my Korea trip!
        </span>
      </p>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white shadow-white ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title.split("|").join("\n")}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
