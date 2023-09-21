"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./sort.module.scss";

const sorts = [
  {
    id: 1,
    text: "by price ASC",
  },
  {
    id: 2,
    text: "by price desc",
    icon: <Image src="/women.svg" alt="men" width={10} height={15} priority />,
  },
];

export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Image src="/sort.svg" alt="sort menu" width={17} height={17} priority />
      <p className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        Sort
      </p>
      {isOpen && (
        <div className={styles.dropdown}>
          <Image
            src="/top-arrow.svg"
            alt="close"
            width={22}
            height={11}
            className={styles.arrow}
          />
          <div className={styles.list}>
            <ul>
              {sorts.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
