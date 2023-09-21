import styles from "./button.module.scss";

type Props = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ text, icon, onClick }: Props) => {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      <span className={styles.text}>{text}</span>
      <>{icon && <span>{icon}</span>}</>
    </button>
  );
};
