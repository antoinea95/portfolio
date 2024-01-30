import { Skill } from "../utils/types";

export const RoundIcon = ({item}: {item:Skill}) => {

    return (
        <span className="round-icon">
            <img src={item.icon}  alt={item.name} />
        </span>
    )
}