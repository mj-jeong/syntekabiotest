import { useEffect, useRef, useState } from 'react';
import styles from './VideoSection.module.scss';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasPlayedRef = useRef(false); // 재생 여부 추적

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  // Intersection Observer로 스크롤 기반 자동 재생 (1회 제한)
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            // VideoSection이 화면에 50% 이상 보일 때 + 아직 재생되지 않았을 때
            video.play().catch((error) => {
              // 자동재생 실패 시 (브라우저 정책)
              console.log('Autoplay prevented:', error);
            });
            hasPlayedRef.current = true; // 재생됨 표시
          } else if (!entry.isIntersecting && hasPlayedRef.current) {
            // VideoSection이 화면을 벗어날 때
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보일 때 트리거
        rootMargin: '0px',
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.video}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>테스트용 영상 단락</h2>
        <p className={styles.subtitle}>
          면접 과제용으로 제작된 샘플 영상 단락입니다. <br />
          사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.
        </p>
      </div>
      <div className={styles.videoArea}>
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            src='/video/main.mp4'
            aria-label='제품 소개 영상'
            controls
            preload='metadata'
            muted
            playsInline
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          />
          {!isPlaying && (
            <button
              type='button'
              className={styles.playButton}
              onClick={handlePlay}
              aria-label='재생'
            >
              <img src='/assets/img/svg/icon_play.svg' alt='' width='42' height='42' />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
