import styles from "../../styles/ProjectSection.module.css";

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

export function SkillItem({ item_url, item_title, is_active, onSkillClick }: SkillItemProps){
  return (
    <button onClick={() => onSkillClick({item_url: item_url, item_title: item_title, is_active: is_active})} className={[styles.item_skill, styles.Button_skill, is_active? styles.active : ''].join(' ')}>
      <img src={item_url} alt={`icono habilidad ${item_title}`} loading="lazy" />
    </button>
  )
}
