import { Button } from "../button/button";
import styles from "./login.module.scss";

export const Login = () => {
  return (
    <div className={styles.container}>
      <form action="">
        <div className={styles.form}>
          <input type="text" placeholder="login" />
          <input type="password" placeholder="password" />
        </div>
        <Button text="Login" />
      </form>
    </div>
  );
};
