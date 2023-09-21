"use client";

import Image from "next/image";
import { useSwiperSlide } from "swiper/react";
import classNames from "classnames";
import styles from "./sliderItem.module.scss";
import { Slide as Props } from "@/app/components/slider/slider";

export const SliderItem = ({ text, title, price, img, id }: Props) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={classNames(styles.container, {
        [styles.active]: swiperSlide.isActive,
      })}
      key={id}
    >
      <div className={styles.imgWrapper}>
        <Image src={img} alt={title} fill priority className={styles.img} />
      </div>
      <div className={styles.right}>
        <p className={styles.text}>{text}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};
