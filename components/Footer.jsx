'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { planetVariants, staggerContainer, fadeIn, footerVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import styles from "../styles";

const Footer = () => {
  const form = useRef();
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    const sendButton = document.querySelector('button[type="submit"]');
    if (
      user_name.trim() === "" || user_email.trim() === "" || message.trim() === ""
    ) {
      sendButton.disabled = true;
    } else {
      sendButton.disabled = false;
    }
  }, [user_name, user_email, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_******",
        "template_******",
        form.current,
        "************"
      )
      .then(
        (result) => {
          setNotificationMessage("Email sent. Talk soon!");
          document.querySelector(".notification").classList.add("show");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <section className={`${styles.paddings} relative z-10`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.95] flex justify-center flex-col"
          >
            <TypingText title="| Contact" />
            <TitleText title={<>We love getting Emails</>} />
            <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
              <form ref={form} onSubmit={sendEmail}>
                <p className="font-normal text-[14px] text-white opacity-50">
                  | Name
                </p>
                <input
                  className="flex items-center h-fit py-4 px-6 bg-[#fffff] rounded-[32px] gap-[12px]"
                  type="text"
                  name="user_name"
                  value={user_name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <br></br>
                <p className="font-normal text-[14px] text-white opacity-50">
                  | Email Address
                </p>

                <input
                  className="flex items-center h-fit py-4 px-6 bg-[#fffff] rounded-[32px] gap-[12px]"
                  type="email"
                  name="user_email"
                  value={user_email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <br></br>
                <p className="font-normal text-[14px] text-white opacity-50">
                  | Message
                </p>

                <textarea
                  className="flex items-center h-fit py-4 px-6 bg-[#fffff] rounded-[32px] gap-[12px]"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <br></br>
                <button
                  type="submit"
                  value="Send"
                  className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
                >
                  <span className="font-normal text-[16px] text-white">
                    Submit
                  </span>
                </button>
                <br></br>
                <div className="font-normal text-[14px] text-white opacity-50">
                  <div className="notification">{notificationMessage}</div>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            variants={planetVariants("right")}
            className={`flex-1 ${styles.flexCenter}`}
          >
            <img
              src="/email.png"
              alt="get-started"
              className="w-[90%] h-[90%] object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">LOOKKIE</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Lookkie. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

