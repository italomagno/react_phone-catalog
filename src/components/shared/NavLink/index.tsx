import styles from './NavLink.module.scss';
interface NavLinkProps {
  href: string;
  label: string;
  modifier: 'active' | undefined;
}
export function NavLink({ href, label, modifier }: NavLinkProps) {
  return (
    <li className={`${styles.nav} ${modifier ? styles[modifier] : ''}`}>
      <a
        href={href}
        className={`${styles.nav__link} ${modifier ? styles[modifier] : ''}`}
      >
        {label}
      </a>
    </li>
  );
}
