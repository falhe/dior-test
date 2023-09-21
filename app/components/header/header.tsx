import Image from "next/image";
import { Logo } from "@/app/components/logo/logo";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <Logo />
      <Image src="/cart.svg" alt="cart" width={43} height={33} priority />
    </nav>
  );
};
