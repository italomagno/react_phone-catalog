import styles from './Header.module.scss';
import { Button } from '../Button';
import { NavLink } from '../NavLink';
import { headerLiks } from '../../../utils/constants';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__logo}></div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__ul}>
            {headerLiks.map((link, index) => (
              <NavLink
                href={link.href}
                label={link.label}
                modifier={link.modifier}
                key={`navLink-${index}`}
              />
            ))}
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <Button variant="icon" className={styles.ButtonHeader}>
          <div className={`${styles.button__heart}`} />
        </Button>
        <Button variant="icon" className={styles.ButtonHeader}>
          <div className={`${styles.button__bag}`} />
        </Button>
      </div>
    </header>
  );
}
