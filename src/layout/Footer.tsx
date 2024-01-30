import { useRef } from "react"
import { RoundLink } from "../components/RoundLink"
import { links } from "../utils/content"
import { useMotion } from "../utils/useMotion";
import {motion} from "framer-motion";

export const Footer = () => {

    const ref = useRef<HTMLElement>(null);
    const animation = useMotion(ref);

    const translateTopVariants = {
        hidden: {y: 300},
        visible: {y: 0, transition: {duration:0.6, delay: 0, ease: "easeOut"}}
    }

    return (
        <footer className="footer" ref={ref}>
            <motion.p 
            className="footer-credits"
            variants={translateTopVariants}
            initial="hidden"
            animate={animation}
            >
                design and developed by Antoine Amoroso
            </motion.p>
            <section className="footer-links">
            {links.map((link) => (
            <RoundLink item={link} key={link.name} animation={animation} variants={translateTopVariants} />
          ))}
            </section>
        </footer>
    )
}