import styles from './Tab.module.scss';

interface TabProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export default function Tab({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${index === activeTab ? styles.active : ''}`}
            onClick={() => onTabChange(index)}
          >
            {tab}
            {index === activeTab && <div className={styles.selectedBar}></div>}
          </button>
        ))}
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}

