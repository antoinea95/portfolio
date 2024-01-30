import { useRef } from "react"
import { Trait } from "../components/svg"
import { WorkCard } from "../components/WorkCard"
import { works } from "../utils/content"
import { motion } from "framer-motion"
import { useMotion } from "../utils/useMotion"

export const Work = () => {

    const ref = useRef<HTMLElement>(null)
    const animation = useMotion(ref);

    const titleVariants = {
        visible: {x: 0, opacity: 1, transition: {duration: 1, ease: "easeOut"}},
        hidden: {x: -100, opacity: 0}
    }


    return (
        <article 
        className="work" 
        id="work" 
        ref={ref}
        >
            <motion.div 
            className="work-title"
            variants={titleVariants}
            initial="hidden"
            animate={animation}
            >
                <h2>WORK</h2>
            </motion.div>
            <div className="work-container">
               {works.map((item) => <WorkCard key={item.name}  item={item} animation={animation}/>)}
            </div>
            <div className="work-decoration">
            <Trait animation={animation}/>
            </div>
        </article>
    )
}