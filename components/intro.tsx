"use client";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import React from "react";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            style={
              {
                // scale: size,
              }
            }
          >
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQFlsU8IZ_99hA/profile-displayphoto-shrink_200_200/0/1670307795304?e=1712188800&v=beta&t=NoJhdHQsuaqaRiZpUdEv2kFx6ICtPxlWYnuxP1utDC4"
              alt="Profile"
              width={192}
              height={192}
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
            // className="text-4xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I'm Sam Banankhu.</span> I'm a{" "}
        <span className="font-bold">Data Scientist </span> with{" "}
        <span className="font-bold">3 years</span> of experience. I Specialize
        in{" "}
        <span className="italic">
          Machine Learning Models & Data Analytics.{" "}
        </span>
        In web, my focus is <span className="underline">React (Next.js)</span>.
      </motion.p>
    </section>
  );
}
