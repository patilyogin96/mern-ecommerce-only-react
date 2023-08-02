import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import HomeCard from "../HomeCard/HomeCard";



const CarouselComponent = ({
  className,
  items,
  ...otherProps
}) => {
  console.log("Lats", className);

  const carSingleItem = items.map((e, i) => {
    return <HomeCard info={e} />;
  });

  console.log("DDDD", carSingleItem);

  return (
    <div className={`${styles.container} ${className}`}>
      <Carousel showThumbs={false} {...otherProps}>
        {carSingleItem}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
