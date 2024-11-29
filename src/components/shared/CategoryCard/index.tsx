import styles from './CategoryCard.module.scss';

export function CategoryCard() {
  return (
    <div className={styles.CategoryCard}>
      <a href={'./'}>
        <div className={styles.CategoryImage}></div>
        <h3 className={styles.CategoryTitle}>Mobile phones</h3>
        <p className={styles.CategoryDescription}>95 models</p>
      </a>
    </div>
  );
}
