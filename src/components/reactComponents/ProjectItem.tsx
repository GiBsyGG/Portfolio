import { useStore } from '@nanostores/react'
import { skillsStore } from '../../stores/skillsStore';

import { AnimatePresence, motion } from "framer-motion"

import styles from "../../styles/ProjectSection.module.css";

interface ProjectItemProps {
  image_url: string;
  title: string;
  skillsUsed: string[];
  description: string;
  role: string;
  project_url: string;
}

export function ProjectItem({ image_url, title, skillsUsed, description, role, project_url }: ProjectItemProps) {

  const skills = useStore(skillsStore);

  const skillUsedActive = skills.filter((skill) => skillsUsed.find((s) => s === skill.item_title));
  
  return (
    <a href={project_url} className={styles.project_card_container}>
      <div className={styles.project_skills}>
        {skillUsedActive.map((activeSkill) => (
          <AnimatePresence key={activeSkill.item_title}>
            {
              activeSkill.is_active &&
              <motion.div  className={styles.skill_project}
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}>
                <img src={activeSkill.item_url} alt={`icono de habilidad ${activeSkill.item_title}`} />
              </motion.div>
            }
          </AnimatePresence>
        ))}
      </div>

      <div className={styles.item_project}>
        <div className={styles.img_container}>
          <img src={image_url} alt={`imagen de proyecto ${title}`} loading="lazy"/>
          <div className={styles.description_container}>
            <p>{description}</p>
            <p>Mi Aporte: {role}</p>
          </div>
        </div>
        <h1>{title}</h1>
      </div>
    </a>
  )
}
