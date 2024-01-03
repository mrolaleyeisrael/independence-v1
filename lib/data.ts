import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import eStore from '@/public/eStore.webp'
import ipAddress from '@/public/ipAddressTracker.webp'
import githubProfile from '@/public/githubProfile.webp'
import restaurantFindr from '@/public/restaurantFindr.webp'
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [

  {
    title: "Front-End Developer Intern",
    location: "KodeCamp Team",
    description: `Consumed existing APIs for practice using Axios and fetch API, APIs like the fake store API, and world countries API. Worked with quite a number of React libraries like react-router, react-pagination, react-query and more.`,
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - July 2022",
  },
  {
    title: "Front-End Developer Intern",
    location: "Zuri Team",
    description: "I worked hand-in-hand with the Backend and the UI team to build a platform thatsplits, CSV and JSON files into chunks as a final project.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - August 2022",
  },

  {
    title: "Front-End Developer",
    location: "GathPays",
    description:
      "Currently working with a frontend team of 3 and backend engineers on a fintechapp that is set to launch in the first quarter of 2024.",
    icon: React.createElement(FaReact),
    date: "December 2022 - June 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Restaurant Finder",
    description:
      "Locate the nearest restaurant to you.",
    tags: ["React", "Next.js", "NextAuth", "Tailwind", "Google Map API"],
    imageUrl: restaurantFindr,
    projectURL: "https://restaurantfindr.vercel.app/"
  },
  {
    title: "Hostel Manager",
    description: "Locate the nearest restaurant to you.",
    tags: ["React", "Next.js", "Tailwind", "Google Map API"],
    imageUrl: corpcommentImg,
    projectURL: "https://staging-hostel.netlify.app/dashboard"
  },
  {
    title: "Github Profiles",
    description: "Github Profile",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "React Query"],
    imageUrl: githubProfile,
    projectURL: "https://githubprofile-me.vercel.app/"
  },
  {
    title: "IP Address Tracker",
    description: "frontendmentor's challenge to build an IP Addrerss Tracker using two APIs you can get the location of a particular IP and also the ISP",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: ipAddress,
    projectURL: "https://githubprofile-me.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
