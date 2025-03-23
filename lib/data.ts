import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { ImAirplane } from "react-icons/im";
import tapes from "@/public/Tapes.png";

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
    title: "Computer Science",
    location: "Technological University Dublin",
    description:
      "I graduated with a First Class Honours degree after 4 years studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Business Analyst",
    location: "Kerry Group",
    description:
      "I worked as a business analyst carrying out end-to-end testing for weekly developments. I also worked as a fullstack developer in this role developing internal Kerry websites.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "SAP BI UI/UX Developer",
    location: "Kerry Group",
    description:
      "Developed interactive BI dashboards, contributing to improved business performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Software Engineer",
    location: "Zalando",
    description:
      "Collaborated with project managers and design teams to develop frontend features and enhance systems.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Travel - Career Break",
    location: "South East Asia and Australia",
    description:
      "After four years working as a Software Engineer after college, I took time off to travel and work in Australia. During this time, I worked in several different industries, including general laboring on civil projects, working on Sydney’s railway infrastructure, and bartending in an Irish bar in Sydney. This experience has given me a fresh perspective and reinforced my passion for technology.",
    icon: React.createElement(ImAirplane),
    date: "2023 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Tapes",
    description:
      "A music application that utilizes the multi-sensory qualities of mainstream music services to create an immersive user experience",
    tags: ["Node.js", "Ticketmaster API", "YouTube API", "Spotify API"],
    imageUrl: tapes,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "PHP",
  "Next.js",
  "Node.js",
  "Git",
  "SQL",
  "JSON",
  "MongoDB",
  "AWS",
  "Figma",
  "Jenkins",
  "Webpack",
  "Redux",
  "Bootstrap",
  "SCRUM",
  "Data Structures",
  "CI/CD",
  "TDD",
] as const;
