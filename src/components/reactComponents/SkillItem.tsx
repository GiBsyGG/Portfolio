import styles from "../../styles/ProjectSection.module.css";

import { motion } from "framer-motion";

interface SkillItemProps {
  item_url: string;
  item_title: string;
  is_active: boolean;
  onSkillClick(skill: Skill): void;
}

interface Skill {
  item_url: string;
  item_title: string;
  is_active: boolean;
}

const item_button = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function SkillItem({ item_url, item_title, is_active, onSkillClick }: SkillItemProps){
  return (
    <motion.button onClick={() => onSkillClick({item_url: item_url, item_title: item_title, is_active: is_active})} 
    className={[styles.item_skill, styles.Button_skill, is_active? styles.active : ''].join(' ')}
    variants={item_button}>
      <img src={item_url} alt={`icono habilidad ${item_title}`} loading="eager" />
    </motion.button>
  )
}
