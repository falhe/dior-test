import { Welcome } from "@/app/components/welcome/welcome";
import { Login } from "@/app/components/loginForm/login";
import { Logo } from "@/app/components/logo/logo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Welcome />
        <Login />
      </div>
      <div className={styles.tower}></div>
    </main>
  );
}
