import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <p className={styles.text}>Destinos Turísticos</p>
      </div>
    </div>
  );
}
