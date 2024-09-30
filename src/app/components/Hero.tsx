"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slideToScroll:1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner.png",
            title: "Trending items",
            mainTitle: "Women's Latest Fashion Sale",
            price: "$20",
        },
        {
            id: 1,
            img: "/banner2.png",
            title: "Trending items",
            mainTitle: "Women's Latest Fashion Sale",
            price: "$20",
        },
        {
            id: 2,
            img: "/banner3.jpg",
            title: "Trending items",
            mainTitle: "Women's Latest Fashion Sale",
            price: "$20",
        },
    ];

  return <div>
    <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price} />                
            ))}     
        </Slider>
    </div>
  </div>;
};

export default Hero;
