import Image from "next/image";
import styles from "./head.module.scss";

export const Head = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/pngwing-3.png"
        alt="Key"
        width={20}
        height={44}
        priority
      />
      <h1 className={styles.title}>The secret collection</h1>
    </div>
  );
};
