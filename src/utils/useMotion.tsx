import { useAnimation, useInView } from "framer-motion";
import { useLayoutEffect } from "react"

export const useMotion = (ref : React.RefObject<HTMLElement>) => {
    
    const isInView = useInView(ref);
    const controls = useAnimation();

    useLayoutEffect(() => {
        if(isInView) {
            controls.start("visible")
        } 
    }, [controls, isInView])

    return controls;
}