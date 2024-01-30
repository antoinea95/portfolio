import { RoundIcon } from "../components/RoundIcon";
import { Skill } from "../utils/types";
import { useRef } from "react";
import { ZigZag } from "../components/svg";
import {motion} from "framer-motion";
import { useMotion } from "../utils/useMotion";

export const About = () => {

  const ref = useRef<HTMLElement>(null);
  const animation = useMotion(ref);

  const titleVariants = {
    visible: {x: 0, opacity: 1, transition: {duration: 1}},
    hidden: {x: 100, opacity: 0}
  }

  const blockLeftVariants = {
    visible: {x:0, opacity:1},
    hidden: {x: -500, opacity:0}
  }

  const blockRightVariants = {
    visible: {x:0, opacity:1},
    hidden: {x: 300, opacity:0}
  }

    const skills : Skill[] = [
        {name: "React", icon:"./icones/react-logo.svg"},
        {name: "Typescript", icon:"./icones/typescript-logo.svg"},
        {name: "Sass", icon:"./icones/sass-logo.svg"},
        {name: "Illustrator", icon:"./icones/illustrator-logo.svg"},
        {name: "Indesign", icon:"./icones/indesign-logo.svg"},
        {name: "Photoshop", icon:"./icones/photoshop-logo.svg"},
    ];

  return (
    <article className="about" id="about" ref={ref}>
      <motion.h2 
      className="about-title"
      initial="hidden"
      animate={animation}
      variants={titleVariants}
      transition={{duration:1, ease: "easeOut"}}
      >About
      </motion.h2>
      <div className="about-container">
        <motion.section 
        className="about-content"
        initial="hidden"
        animate={animation}
        variants={blockLeftVariants}
        transition={{duration:1, delay: 0.5, ease: "easeOut"}}
        >
          <p>
            Being passionate, I learned graphic design on my own and stay
            updated on various trends. It enables me to apply my knowledge when
            i’m working on a web project. To develop, I use React and its
            numerous libraries (Tanstack Query, Redux, GSAP, etc.). I’m still
            learning and improving myself everyday.
          </p>
        </motion.section>
        <motion.section 
        className="about-skills"
        initial="hidden"
        animate={animation}
        variants={blockRightVariants}
        transition={{duration:1, delay: 0.5, ease: "easeOut"}}
        >
            <h3>Skills</h3>
            <div className="about-skills_grid">
            {skills.map((skill) => <RoundIcon item={skill} key={skill.name} />)}
            </div>
        </motion.section>
        <div className="about-decoration">
        <ZigZag animation={animation} />
      </div>
      </div>
    </article>
  );
};
