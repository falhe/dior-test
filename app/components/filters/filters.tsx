"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./filters.module.scss";

type ItemProps = {
  text: string;
  icon: React.ReactNode;
};

const genders = [
  {
    id: 1,
    text: "women",
    icon: <Image src="/men.svg" alt="men" width={10} height={15} priority />,
  },
  {
    id: 2,
    text: "men",
    icon: <Image src="/women.svg" alt="men" width={10} height={15} priority />,
  },
];

const shops = [
  {
    id: 1,
    text: "shirts",
    icon: <Image src="/shirt.svg" alt="men" width={10} height={15} priority />,
  },
  {
    id: 2,
    text: "bags",
    icon: <Image src="/bag.svg" alt="men" width={10} height={15} priority />,
  },
  {
    id: 3,
    text: "jewelry",
    icon: <Image src="/ring.svg" alt="men" width={10} height={15} priority />,
  },
];

const Item = ({ text, icon }: ItemProps) => {
  return (
    <li>
      <span>{icon}</span>
      <span className={styles.item}>{text}</span>
    </li>
  );
};

export const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Image
        src="/images/menu.png"
        alt="filer menu"
        width={17}
        height={17}
        priority
      />
      <p className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        Filters
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
              {genders.map(({ id, text, icon }) => (
                <Item key={id} {...{ text, icon }} />
              ))}
            </ul>
            <ul>
              {shops.map(({ id, text, icon }) => (
                <Item key={id} {...{ text, icon }} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
