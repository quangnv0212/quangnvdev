"use client";

import { items, itemsTwo } from "@/data/jobFeatures";
import React, { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";
import ReactCardFlip from 'react-card-flip';
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { bioData } from "@/data/bioData";
import Image from "next/image";
import ImageOverlay from "@/components/ImageOverlay";

export default function MyStory() {
  const [showSlider, setShowSlider] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  const handleClick=(e)=>{
    e.preventDefault();
    setIsHovered(prev=>!prev);
  }
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bostami-page-content-wrap">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15">
          <h2 className="page-title">My Story</h2>
        </div>
      </div>
      <div      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ReactCardFlip isFlipped={isHovered} flipDirection="vertical">
  <ImageOverlay/>
  <ImageOverlay/>

      </ReactCardFlip>
      </div>

    </div>
  );
}
