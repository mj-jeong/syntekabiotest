import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'filled',
  size = 'medium',
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

