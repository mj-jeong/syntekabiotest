import Tag from '../common/Tag';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.titleArea}>
        <Tag>Syntekabio</Tag>
        <h1 className={styles.title}>이 페이지는 테스트 중입니다</h1>
        <p className={styles.subtitle}>면접 과제용으로 제작된 샘플 페이지입니다.</p>
      </div>
      <div className={styles.imageArea}>
        <div className={styles.device}>
          <div className={styles.deviceFrame}>
            <div className={styles.innerScreen}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
