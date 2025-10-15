import { Link } from 'react-router-dom';
import styles from './ThankYou.module.css';

export const ThankYou = () => {
  return (
    <div className={styles.container}>
      <h1>🎉 Thank you for your order!</h1>
      <p>Your meal is on its way.</p>
      <Link to="/" className={styles.homeLink}>
        Back to Home
      </Link>
    </div>
  );
};