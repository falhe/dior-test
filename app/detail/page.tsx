"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "@/app/components/button/button";
import { Head } from "@/app/components/head/head";
import { Menu } from "@/app/components/menu/menu";
import { Slider } from "@/app/components/slider/slider";
import { Sidebar } from "@/app/components/sidebar/sidebar";

export default function Page() {
  const [hasCart, setHasCart] = useState(false);
  return (
    <div>
      <div className={styles.container}>
        <Head />
        <Menu />
      </div>

      <Slider />
      {hasCart && <Sidebar onClick={() => setHasCart(false)} />}

      <div className={styles.cta}>
        <Button
          text="add to cart"
          icon={
            <Image src="/cart.svg" alt="cart" width={43} height={33} priority />
          }
          onClick={() => setHasCart(!hasCart)}
        />
      </div>
    </div>
  );
}
