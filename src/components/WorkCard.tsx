import { WorkType } from "../utils/types";
import { RoundIcon } from "./RoundIcon";
import { RoundLink } from "./RoundLink";
import {motion, AnimationControls } from "framer-motion";

export const WorkCard = ({
  item,
  animation,
}: {
  item: WorkType;
  animation: AnimationControls
}) => {

  const cardVariants = {
    hidden: { y: 300, opacity: 0},
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut"} },
  };

  const contentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.8, ease: "easeOut"} },
  };

  const LinkVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }


  return (
    <motion.section
      className="work-card"
      variants={cardVariants}
      initial="hidden"
      animate={animation}
    >
      <motion.div
        className="work-card_container"
        variants={contentVariants}
        initial="hidden"
        animate={animation}
      >
        <div className="work-card_header">
          <h3>{item.name}</h3>
          {item.site && <RoundLink item={item.site} animation={animation} variants={LinkVariants} />}
        </div>
        <div className="work-card_skills">
          {item.technos.map((skill) => (
            <RoundIcon item={skill} key={skill.name} />
          ))}
        </div>
        <div className="work-card_content">{item.content()}</div>
        {item.pictures && (
          <div className="work-card_img">
            {item.pictures.map((image) => (
              <img
                src={image}
                alt={`Screenschot du site ${item.name}`}
                key={image}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.section>
  );
};
