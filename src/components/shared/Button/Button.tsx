import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'icon';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  variant,
  className,
  ...ButtonComponentProps
}: ButtonComponentProps) {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      {...ButtonComponentProps}
    >
      {children}
    </button>
  );
}
