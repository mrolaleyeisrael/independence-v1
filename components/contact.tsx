'use client';

import React, { ChangeEvent, useRef, MutableRefObject } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { ref } = useSectionInView("Contact");

  const form = useRef<HTMLFormElement>(null)
  
  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   emailjs.sendForm('bQto4IODh6jK7Nr9t', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }} >
      <SectionHeading>Send me a Message</SectionHeading>


      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mrolaleyeisrael@gmail.com">
          mrolaleyeisrael@gmail.com</a>{" "}
        or through this form.
      </p>


      <form
        /*ref={form} onSubmit={sendEmail} */
        className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
      </form>
    </motion.section>)
}

export default Contact

