import { useState } from 'react';
import Tab from '../common/Tab';
import styles from './TabSection.module.scss';

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['탭 영역 1', '탭 영역 2', '탭 영역 3'];

  return (
    <section className={styles.tabSection}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>테스트용 탭 영역 단락 입니다</h2>
        <p className={styles.subtitle}>
          면접 과제용으로 제작된 샘플 탭 단락입니다. <br />
          인터렉션, 코드 구조등을 자유롭게 구현하세요.
        </p>
      </div>
      <div className={styles.tabArea}>
        <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className={styles.tabContent}>
        <div className={styles.contentBox}>
          <p className={styles.contentText}>탭 {activeTab + 1}의 콘텐츠</p>
        </div>
      </div>
    </section>
  );
}
