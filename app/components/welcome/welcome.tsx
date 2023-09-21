import styles from "./welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={styles.container}>
      <p className={styles.first}>Bienvenue</p>
      <p className={styles.second}>Welcome</p>
      <p className={styles.last}>いらっしゃいませ</p>
    </div>
  );
};
