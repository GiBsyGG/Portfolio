import { useStore } from '@nanostores/react'
import { skillsStore } from '../../stores/skillsStore';
import { ProjectsStore } from '../../stores/projectsStore';

import { SkillItem } from './SkillItem';
import { ProjectItem } from './ProjectItem';

import styles from '../../styles/ProjectSection.module.css'

interface Skill {
  item_url: string;
  item_title: string;
  is_active: boolean;
}

export function ProjectsContainer (){

  const skills = useStore(skillsStore);

  const projects = ProjectsStore;

  const onSkillClick = (skill: Skill ) => {
    // Cambia el estado con set, enviando todas las skills y cambiando el estado de la skill clickeada
    skillsStore.set(skills.map((s):Skill => {
      if (s.item_title === skill.item_title) {
        return {
          ...s,
          is_active: !s.is_active
        }
      }
      return s;
    }))
  }

  return (
    <div>
      <div className={styles.skills_container}>
        {skills.map((skill) => (
          <SkillItem key={skill.item_title}
          item_url={skill.item_url} 
          item_title={skill.item_title} 
          is_active={skill.is_active} 
          onSkillClick={onSkillClick} />
        ))}
      </div>

      <div className={styles.projects_container}>
        {projects.map((project) => (
          <ProjectItem key={project.title} 
          image_url={project.image_url} 
          title={project.title} 
          skillsUsed={project.skillsUsed} 
          description={project.description} 
          role={project.role}
          project_url={project.project_url}/>
        ))}
      </div>
    </div>
  )
}
