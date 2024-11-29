import { ReactNode } from 'react';
import { Button } from '../../shared/Button';
import styles from './SectionComponent.module.scss';
import classNames from 'classnames';

interface SectionComponentProps {
  sectionTitle: string;
  children: ReactNode;
  variant: 'default' | 'withControllers';
}

export function SectionComponent({
  children,
  variant,
  sectionTitle,
}: SectionComponentProps) {
  const hasControllers = variant === 'withControllers';

  return (
    <section className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
        {hasControllers ? (
          <div className={styles.sectionControllers}>
            <Button variant="icon" className={classNames(styles.sectionButton)}>
              <div className={styles.sectionLeftButton}></div>
            </Button>
            <Button
              variant="icon"
              className={classNames(styles.sectionButton, styles.active)}
            >
              <div
                className={classNames(styles.sectionRightButton, styles.active)}
              ></div>
            </Button>
          </div>
        ) : null}
      </div>
      <div className={styles.sectionContentContainer}>{children}</div>
    </section>
  );
}
