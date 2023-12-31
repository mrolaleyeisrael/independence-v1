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
      <p className=" mb-3 ">
        <span className="font-medium"> Front-end Engineer</span> with 1+ years of professional experience and a proven ability to adapt to the conditions of <span className="italic">both self-starting</span>  and <span className="italic">collaborative environments,</span>  while staying focused on producing high-quality results that are both applicable and reliable.
      </p>
      <p className="mb-3">Passionate about creating innovative solutions that combine cutting-edge technologies with intuitive user interfaces. Firm believer in the power of well-designed and <span className=" underline ">well-implemented applications</span>  to enhance user satisfaction and drive business success.
      </p>
      <p>
        Eager to obtain a challenging position at a company like yours, with a progressive and problem-solving ideology, that will put my expertise into play and expand my <span className="font-medium">knowledge base.</span>


      </p>
    </motion.section>
  );
}

/*
Front-end Engineer with 4+ years of professional experience and a proven ability to adapt to the conditions of both self-starting and collaborative environments, while staying focused on producing high-quality results that are both applicable and reliable.
Passionate about creating innovative solutions that combine cutting-edge technologies with intuitive user interfaces. Firm believer in the power of well-designed and well-implemented applications to enhance user satisfaction and drive business success.
Eager to obtain a challenging position at a company like yours, with a progressive and problem-solving ideology, that will put my expertise into play and expand my knowledge base.
*/