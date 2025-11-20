import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  className?: string;
  imageAlt?: string;
}

export default function Card({ title, description, className = '', imageAlt = '' }: CardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.img} role='img' aria-label={imageAlt || '카드 이미지'}></div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
