"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Lookkie" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Lookkie</span> is a newely
        remodel Development Studio Main hub in Sri Lanka and catering to the{" "}
        <span className="font-extrabold text-white">Dubai </span> and{" "}
        <span className="font-extrabold text-white">United States </span>{" "}
        clients. Highly capable in working with sensitive data. Prioritize data
        privacy and security of clients' needs. Starting from startups to
        government projects, we provide a vast range of solutions to all types
        of clients. Highly motivated in{" "}
        <span className="font-extrabold text-white">
          developing government projects
        </span>{" "}
        for most luxurious nations.{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
