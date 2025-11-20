import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Button from '../common/Button';
import styles from './GNB.module.scss';

export default function GNB() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = ['Service menu 1', 'Service menu 2', 'Service menu 3', 'Service menu 4'];

  // 포커스 트랩 구현
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', trapFocus);
      return () => document.removeEventListener('keydown', trapFocus);
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.gnb}>
      {/* Desktop Navigation */}
      <nav className={styles.desktop} aria-label='데스크톱 주요 네비게이션'>
        <div className={styles.navigation}>
          <div className={styles.logoMenu}>
            <h1 className={styles.logo}>
              <Link href='/' aria-label='홈으로 이동'>
                <div className={styles.logoRect}></div>
              </Link>
            </h1>
            <ul className={styles.menu} role='menubar'>
              {menuItems.map((item, index) => (
                <li key={index} role='none'>
                  <button type='button' className={styles.menuItem} role='menuitem'>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.actions}>
            <button
              type='button'
              className={styles.languageButton}
              aria-label='언어 선택, 현재: 한국어'
              aria-haspopup='menu'
            >
              <span className={styles.langText}>한국어</span>
              <span className={styles.arrow} aria-hidden='true'>
                ▼
              </span>
            </button>
            <Button variant='filled' size='large'>
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={styles.mobile} aria-label='모바일 주요 네비게이션'>
        <div className={styles.navTop}>
          <h1 className={styles.logo}>
            <Link href='/' aria-label='홈으로 이동'>
              <div className={styles.logoRect}></div>
            </Link>
          </h1>
          <button
            type='button'
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
              }
            }}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div id='mobile-menu' ref={menuRef} className={styles.dropdown}>
            <nav className={styles.menuItems} aria-label='모바일 메뉴'>
              <ul>
                <li className={styles.listItem}>
                  <button type='button'>Benefits</button>
                </li>
                <li className={styles.listItem}>
                  <button type='button'>Specifications</button>
                </li>
                <li className={styles.listItem}>
                  <button type='button'>How-to</button>
                </li>
                <li className={styles.listItem}>
                  <button type='button'>Contact Us</button>
                </li>
              </ul>
              <Button variant='filled' size='small'>
                Login →
              </Button>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
