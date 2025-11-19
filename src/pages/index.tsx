import GNB from '@/components/layout/GNB';
import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import TabSection from '@/components/sections/TabSection';
import CardSection from '@/components/sections/CardSection';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <GNB />
      <main className={styles.main}>
        <HeroSection />
        <VideoSection />
        <TabSection />
        <CardSection />
      </main>
    </div>
  );
}
