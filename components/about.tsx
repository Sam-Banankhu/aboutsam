"use client";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
    >
      <h2 className="text-3xl font-medium text-gray-950 dark:text-white">
        About me
      </h2>

      <p className="mb-3 mt-8 px-4 dark:text-white/80">
        Currently in my final year studying BSc. in{" "}
        <span className="font-medium">Data Science</span> at Mzuzu University, I
        have participated in different Hackathons and Competitions in order to
        improve my skills.
        {/* I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. */}{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Django, Flask, React, Next.js, Node.js, Postgres and MongoDB
        </span>
        . I am also familiar with TypeScript and Java. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time or internship</span> as a Data
        Scientist and Machine Learning Model Developer.
      </p>
      <p className="px-4 dark:text-white/80">
        {/* <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog.  */}
        I enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">
          Application of Generative AI and its Optimization
        </span>
        .{/* I'm also learning how to play the guitar. */}
      </p>
    </motion.section>
  );
}

export default About;
