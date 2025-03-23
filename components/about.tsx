"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating college with a{" "}
        <span className="underline">first class honours degree</span> in{" "}
        <span className="font-medium">Computer Science</span>, I began my
        software development journey at Kerry Group. I was lucky enough to be
        offered a graduate role in Kerry Group in my third year of college after
        a successful internship. I worked Kerry Group for 3 years as a Business
        Analyst and then as a BI UI/UX developer. I then moved to Zalando where
        I worked as a Frontend Engineer working mainly with React and
        Typescript.
      </p>
      <p className="mb-3">
        <span className="italic">My favourite part about programming</span> is
        the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out the solution to a complex problem.
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Typescript, Node.js and JavaScript
        </span>
        . I am also familiar PHP, SQL and JSON. I am always looking to learn and
        develop on what I already know. I am currently looking for a{" "}
        <span className="font-medium">full-time positions</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, going to the gym, football and darts. After four years
        working as a Software Engineer after college, I took time off to travel
        and work in Australia. During this time, I worked in several different
        industries, including general laboring on civil projects, working on
        Sydney’s railway infrastructure, and bartending in an Irish bar in
        Sydney. This experience has given me a fresh perspective and{" "}
        <span className="underline">reinforced my passion</span> for technology.
      </p>
    </motion.section>
  );
}
