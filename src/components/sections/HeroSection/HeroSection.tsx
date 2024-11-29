import styles from './HeroSection.module.scss';

export function HeroSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heroPageTitle}>Welcome to Nice Gadgets store!</h1>
      <div className={styles.heroPageContent}>
        <button className={`${styles.HeroButtonLeft}`} />
        <div className={styles.heroPageImage} />
        <button className={`${styles.HeroButtonRight} ${styles.active}`} />
      </div>
      <div className={styles.heroLinkControllers}>
        <div className={`${styles.heroLinkController} ${styles.active}`}></div>
        <div className={styles.heroLinkController}></div>
        <div className={styles.heroLinkController}></div>
      </div>
    </section>
  );
}
