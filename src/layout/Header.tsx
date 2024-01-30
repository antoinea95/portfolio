import { useRef } from "react"
import { useMotion } from "../utils/useMotion"
import {motion} from "framer-motion"

export const Header = () => {

    const ref = useRef<HTMLElement>(null);
    const animation = useMotion(ref);

    const logoVariant = {
        visible: {x: 0, opacity: 1, transition: {duration: 1, ease: "easeOut"}},
        hidden: {x: -300, opacity: 0}
    }

    const navVariant = {
        visible: {x: 0, opacity: 1, transition: {duration: 1, ease: "easeOut"}},
        hidden: {x: 300, opacity: 0}
    }

    return (
        <header className="header" ref={ref}>
            <motion.section 
            className="header-logo"
            variants={logoVariant}
            initial="hidden"
            animate={animation}
            >
                <span className="header-logo_type">Aa</span>
            </motion.section>
            <motion.nav 
            className="header-nav"
            variants={navVariant}
            initial="hidden"
            animate={animation}
            >
                <ul className="header-nav_list">
                    <li className="header-nav_list-item">
                        <a href="#work">work</a>
                    </li>
                    <li className="header-nav_list-item">
                        <a href="#about">about</a>
                    </li>
                    <li className="header-nav_list-item">
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </motion.nav>
        </header>
    )
}