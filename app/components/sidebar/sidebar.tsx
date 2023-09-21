import Image from "next/image";
import { Button } from "@/app/components/button/button";
import styles from "./sidebar.module.scss";

type Props = {
  onClick?: () => void;
};

export const Sidebar = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <header>
        <Image
          src="/close.svg"
          alt="close"
          width={39}
          height={39}
          priority
          onClick={onClick}
        />
        <Image src="/cart.svg" alt="close" width={43} height={33} priority />
      </header>

      <section>
        <Image
          src="/images/slide1.png"
          width={162}
          height={160}
          alt="Key"
          priority
        />
        <div className={styles.description}>
          <p className={styles.title}>men shirt</p>
          <p className={styles.price}>19 000€</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.title}>
          <span>taxes</span>
          <span>3 166.67 €</span>
        </div>
        <div className={styles.total}>
          <span>
            <b>total</b>
          </span>
          <span>19 000 €</span>
        </div>

        <Button text="go to checkout" />
      </footer>
    </div>
  );
};
