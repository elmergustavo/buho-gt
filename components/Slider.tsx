"use client";

import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Banner.module.css";

const Slider = () => {
  // const images = [
  //   "https://cdn.shopify.com/s/files/1/0068/5074/0281/files/Hype-16x9.png?v=1660577565",
  //   "https://cdn.shopify.com/s/files/1/0068/5074/0281/files/Image_from_iOS_50_94fafce7-e212-4f02-8532-1ac728fc7729.jpg?v=1658943136",
  // ];

  const images = [
    "assets/images/carusel.png",
    "assets/images/carusel2.png",
    "assets/images/carusel3.png",
  ];
  const url = "";
  return (
    <div>
      <Slide
        arrows={false}
        easing="ease"
        duration={5000}
        indicators
        cssClass={styles["slideColor"]}
      >
        {images.map((image) => {
          return (
            <div className={styles["each-slide"]} key={image}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slider;
