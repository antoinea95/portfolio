import { RoundLink } from "../components/RoundLink";
import { useMotion } from "../utils/useMotion";
import { useRef } from "react";
import {motion} from "framer-motion";
import { links } from "../utils/content";

export const Hero = () => {

  const ref = useRef<HTMLElement>(null);
  const animation = useMotion(ref);

const translateTopVariants = {
    visible: {y: 0},
    hidden: {y: 300}
}

const translateBlocVariants = {
  visible: {y: 0},
  hidden: {y: 800}
}


  const heroContent: string =
    "A passionate developer for almost 2 years. Naturally drawn to front-end due to my love for graphic design, I primarily use React and Sass. Being curious, I consistently enhance my technical skills with technologies such as TypeScript, GSAP, and NextJs. Each project is an exciting challenge for me.";
  


  return (
    <article className="hero" ref={ref}>
      <motion.div 
      className="hero-container"
      initial="hidden"
      animate={animation}
      variants={translateBlocVariants}
      transition={{duration: 2.5, ease: "easeOut"}}
      >
      <section className="hero-content">
        <div className="hero-content_title">
            <motion.h1
            initial="hidden"
            animate={animation}
            variants={translateTopVariants}
            transition={{duration: 1, delay: 0.7, ease: "easeOut"}}
            >
            Antoine Amoroso
            </motion.h1>
          <div className="hero-content_title_subtitle">
            <motion.p
            initial="hidden"
            animate={animation}
            variants={translateTopVariants}
            transition={{duration: 1, delay: 0.7, ease: "easeOut"}}
            >
              Front-end developer
            </motion.p>
          </div>
        </div>
        <p className="hero-content_text">
          {heroContent.split(" ").map((word, index) => (
            <span className="hero-content_text_word" key={index}> 
              <motion.span
               initial="hidden"
               animate={animation}
               variants={translateTopVariants}
               transition={{duration: 1, delay: 0.6 + (0.03 * index), ease: "easeOut"}}
              >{word}</motion.span> 
            </span>
          ))}
        </p>
        <div className="hero-links">
          {links.map((link) => (
            <RoundLink item={link} key={link.name} animation={animation} variants={translateTopVariants} />
          ))}
        </div>
      </section>
      <section className="hero-img">
        <motion.div 
        className="hero-img_container"
        initial="hidden"
        animate={animation}
        variants={translateBlocVariants}
        transition={{duration: 1.3, delay: 1, ease: "easeOut"}}
        >
        <img
          src="./images/pp_illu_medium.webp"
          alt="Illustration d'Antoine"
          className="hero-img_illu"
        />
        <img
          src="./icones/price.svg"
          className="hero-img_price"
          alt="decoration"
        />
        <div className="hero-img_stars">
          <img
            src="./icones/star.svg"
            className="hero-img_stars"
            alt="decoration"
          />
          <img
            src="./icones/star.svg"
            className="hero-img_stars"
            alt="decoration"
          />
          <img
            src="./icones/star.svg"
            className="hero-img_stars"
            alt="decoration"
          />
        </div>
        </motion.div>
      </section>

      </motion.div>
    </article>
  );
};
