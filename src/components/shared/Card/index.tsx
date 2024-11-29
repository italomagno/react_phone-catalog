import classNames from 'classnames';
import { Button } from '../Button';
import styles from './Card.module.scss';

export function Card() {
  const isActive = true;

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}></div>
      <p className={styles.cardDescription}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>
      <div className={styles.CardPrice}>$999</div>
      <div className={styles.horizontalRol} />
      <div className={styles.CardInformations}>
        <div className={styles.CardInformation}>
          <h4 className={styles.CardInformationCaracteristic}>Screen</h4>
          <p className={styles.CardInformationText}>{`6.1"OLED`}</p>
        </div>
        <div className={styles.CardInformation}>
          <h4 className={styles.CardInformationCaracteristic}>Capacity</h4>
          <p className={styles.CardInformationText}>128 GB</p>
        </div>
        <div className={styles.CardInformation}>
          <h4 className={styles.CardInformationCaracteristic}>RAM</h4>
          <p className={styles.CardInformationText}>6 GB</p>
        </div>
      </div>
      <div className={styles.cardButtonContainer}>
        <Button variant="primary" className={styles.cardButtonAddToCart}>
          Add to cart
        </Button>
        <Button variant="icon" className={classNames(styles.cardButtonAddLike)}>
          <div
            className={classNames(
              styles.button__heart,
              isActive && styles.active,
            )}
          />
        </Button>
      </div>
    </div>
  );
}
