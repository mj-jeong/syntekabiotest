import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
}

export default function Button({
  children,
  variant = 'filled',
  size = 'medium',
  onClick,
  className = '',
  disabled = false,
  ariaLabel,
  ariaPressed,
  ariaExpanded,
}: ButtonProps) {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
}
