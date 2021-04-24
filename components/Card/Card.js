import styles from "./Card.module.css";
import Link from "next"

export const Card = ({link, title, description}) => {
  return (
      <a href={link} className={styles.card}>
        <h3>{title} &rarr;</h3>
        <p>{description}</p>
      </a>
  );
};
