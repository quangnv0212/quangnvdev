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
import ImageOverlayConent from "@/components/ImageOverlayContent";
import Story from "./Story";
import "./MyStory.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import contentmarkdown from './mystory.md'

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
          <h2 className="page-title">Some facts about me</h2>
        </div>
      </div>
      <div className="story-list">
      <Story img={"/assets/img/my-story-1.jpeg"} front={"My favorite subject was Math"} back={"I love it in high school. I guess it's the asian trait in me."}/>
      <Story img={"/assets/img/classic-rock.jpeg"} front={"I love Classic Rock"} back={"I know a lot of music from 60s to 90s"}/>
      <Story img={"/assets/img/guns n roses.jpeg"} front={"I've been to Guns n Roses show"} back={"That's my motivation to meet other music legends"}/>
      <Story img={"/assets/img/kinhdich.jpeg"} front={"I can do fortune telling"} back={"It's a long story"}/>
      <Story img={"/assets/img/so-ma.jpg"} front={"I am afraid of ghost"} back={"From baby to adult, still the same"}/>
      <Story img={"/assets/img/tahien.jpeg"} front={"I like going to Ta Hien street"} back={"Feel like traveling because there are so many visitors"}/>
      <Story img={"/assets/img/anhngua-3.jpeg"} front={"I tried to learn electric guitar"} back={"It broke when I moved house and still don't have money to fix it"}/>
      <Story img={"/assets/img/mycay.jpeg"} front={"I really like spicy food"} back={"I can eat spicy noodles level 7"}/>
      </div>
      <div className="section-wrapper pl-60 pr-60 pt-60 pb-60">
        <div className="bostami-page-title-wrap mb-15">
          <h2 className="page-title">My Story</h2>
        </div>
        <div>
          <ReactMarkdown>{contentmarkdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
