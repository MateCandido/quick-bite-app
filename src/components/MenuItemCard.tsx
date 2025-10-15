import type { IMenuItem } from '../interfaces/types';
import styles from './MenuItemCard.module.css';

interface MenuItemCardProps {
  item: IMenuItem;
  onAddToCart: () => void;
}

export const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h4 className={styles.name}>{item.name}</h4>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.actions}>
        <img src={item.image} alt={item.name} className={styles.image} />
        <button onClick={onAddToCart} className={styles.addButton}>+</button>
      </div>
    </div>
  );
};