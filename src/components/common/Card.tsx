import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export default function Card({ title, description, className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.img}></div>
      <div className={styles.txt}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

