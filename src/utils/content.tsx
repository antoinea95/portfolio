import { Links, WorkType } from "./types";

export const works: WorkType[] = [
  {
    name: "Elit-technologies",
    site: null,
    pictures: null,
    technos: [
      { name: "React", icon: "./icones/react-logo.svg" },
      { name: "Sass", icon: "./icones/sass-logo.svg" },
    ],
    content: () => {
      return (
        <p>
          I worked at Elit-technologies for almost 1 year as part of my
          internship. We were focused on developing an application that enables
          clients to have an overview of their assets.
        </p>
      );
    },
  },
  {
    name: "Kevin Jacquet",
    site: {
      name: "kevinj",
      src: "./icones/arrow-link.svg",
      href: "https://kevinjacquet-photographe.com/",
    },
    pictures: ["./kevinj/home-1.webp", "./kevinj/caroussel.webp"],
    technos: [
      { name: "React", icon: "./icones/react-logo.svg" },
      { name: "Sass", icon: "./icones/sass-logo.svg" },
    ],
    content: () => {
      return (
        <p>
          A photographer friend contacted me to create a website. The goal was
          to showcase his work, and he wanted a minimalist style that would let
          his photos speak for themselves.We decided to categorize his photos
          into sections, and within each section, I tried to present his work in
          different formats, such as carousels and grids.
        </p>
      );
    },
  },
  {
    name: "OpenClassRooms",
    site: {
      name: "github",
      src: "./icones/arrow-link.svg",
      href: "https://github.com/antoinea95",
    },
    pictures: null,
    technos: [
      { name: "React", icon: "./icones/react-logo.svg" },
      { name: "Sass", icon: "./icones/sass-logo.svg" },
      { name: "Node.js", icon: "./icones/node-logo.svg" },
    ],
    content: () => {
      return (
        <p>
          In early 2022, I decided to learn how to become a developer. To
          achieve this, I completed two courses. I worked on projects using
          Redux, Chart.js, Jest, React Router, among others.
        </p>
      );
    },
  },
];

export const links: Links[] = [
  {
    name: "malt",
    src: "./icones/malt-logo.svg",
    href: "https://fr.malt.be/profile/antoineamoroso?overview",
  },
  {
    name: "github",
    src: "./icones/github-logo.svg",
    href: "https://github.com/antoinea95",
  },
  {
    name: "linkedin",
    src: "./icones/linkedin-logo.svg",
    href: "https://www.linkedin.com/in/antoine-amoroso-developpeur-web/",
  },
];
