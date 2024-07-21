import React from "react";
import MainCarousel from "../../components/Carousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/mens_kurta";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div className="px-2 md:px-5 lg:px-10 py-5 md:py-10 md:space-y-7 lg:space-y-10">
        <HomeSectionCarousel productsData={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel productsData={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel productsData={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel productsData={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel productsData={mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </>
  );
}
