import styles from './Footer.module.scss';
import { NavLink } from '../NavLink';
import classNames from 'classnames';
import { footerLinks } from '../../../utils/constants';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={classNames(styles.container, styles.footerContent)}>
        <div className={styles.header__logo}></div>
        <div>
          <ul className={styles.footerLinks}>
            {footerLinks.map((link, index) => (
              <NavLink
                key={index + '-' + link.label}
                href={link.href}
                label={link.label}
                modifier={undefined}
              />
            ))}
          </ul>
        </div>
        <div className={styles.backToTop}>
          <p className={styles.textBackToTop}>Back to top</p>
          <a href="/#" className={styles.footerButton}>
            <div className={styles.button__arrow} />
          </a>
        </div>
      </div>
    </footer>
  );
}
