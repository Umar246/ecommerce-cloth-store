import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

export default function MainCarousel() {
 
    const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer h-[30vh] md:h-full"
      src={item.image}
      alt="Carousel_Image"
      role="presentation"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
}
