import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          2024 © Anderson - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
