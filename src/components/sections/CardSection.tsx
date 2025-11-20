import { useEffect, useRef, useState } from 'react';
import Card from '../common/Card';
import styles from './CardSection.module.scss';

export default function CardSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: '과제용 카드',
      description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
    },
    {
      title: '과제용 카드',
      description:
        '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. \n모든 내용은 테스트 목적의 더미 데이터입니다.',
    },
    {
      title: '과제용 카드',
      description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
    },
    {
      title: '과제용 카드',
      description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
    },
    {
      title: '과제용 카드',
      description:
        '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. \n모든 내용은 테스트 목적의 더미 데이터입니다.',
    },
    {
      title: '과제용 카드',
      description: '인터렉션, 코드 구조등을 자유롭게 구현하세요.',
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const cardWidth = 460; // 카드 너비
      const gap = 16; // 카드 간격
      const scrollPosition = index * (cardWidth + gap);

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = 460;
      const gap = 16;
      const activeIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveSlide(Math.min(activeIndex, cards.length - 1));
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  // 마우스 드래그 스크롤
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // 스크롤 속도 조절
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.cardSection}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>테스트용 이미지 카드 단락입니다</h2>
        <p className={styles.subtitle}>
          면접 과제용으로 제작된 샘플 단락입니다. <br />
          인터렉션, 코드 구조등을 자유롭게 구현하세요.
        </p>
      </div>
      <div className={styles.carouselArea} role='region' aria-label='제품 카드 캐러셀' ref={carouselRef}>
        <div className={styles.cardsTrack}>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        {cards.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === activeSlide ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
            aria-current={index === activeSlide ? 'true' : 'false'}
            type='button'
          >
            <span className={styles.dotInner}></span>
          </button>
        ))}
      </div>
    </section>
  );
}
