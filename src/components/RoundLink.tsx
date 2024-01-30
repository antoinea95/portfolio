import { Links } from "../utils/types";
import {AnimationControls, motion} from "framer-motion";


type RoundLinkProps = {
    item: Links
    animation: AnimationControls
    variants: {visible: object, hidden: object}
}

export const RoundLink = ({item, animation, variants}: RoundLinkProps) => {


    return (
        <motion.a 
        className="round-link" 
        href={item.href} 
        target="_blank"
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{duration: 1.3, delay: 1.6, ease: "easeInOut"}}
        >
            <img src={item.src}  alt={item.name} />
        </motion.a>
    )

}