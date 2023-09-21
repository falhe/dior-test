"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { SliderItem as Item } from "@/app/components/sliderItem/slideritem";
import styles from "./slider.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type Slide = {
  id: number;
  img: string;
  text: string;
  price: string;
  title: string;
};

const slides: Slide[] = [
  {
    id: 1,
    img: "/images/slide1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "19 000 €",
    title: "Men shirt",
  },
  {
    id: 2,
    img: "/images/slide2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "3 000 €",
    title: "Lady bag",
  },
  {
    id: 3,
    img: "/images/slide3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "100 000 €",
    title: "Dior jewelery",
  },
  {
    id: 2,
    img: "/images/slide2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "3 000 €",
    title: "Lady bag",
  },
  {
    id: 2,
    img: "/images/slide2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "3 000 €",
    title: "Lady bag",
  },
];

export const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      centeredSlides
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className={styles.container}
    >
      {slides.map(({ id, img, text, price, title }) => (
        <SwiperSlide key={id}>
          <Item {...{ img, text, price, title, id }} />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};
