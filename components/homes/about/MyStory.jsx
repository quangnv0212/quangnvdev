"use client";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./MyStory.css";
import contentmarkdown from "./mystory.md";
import Story from "./Story";

export default function MyStory() {
  const [showSlider, setShowSlider] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    setIsHovered((prev) => !prev);
  };
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
        <Story
          img={"/assets/img/rave.jpg"}
          front={"I rave everyweek!"}
          back={"I rave more than anyone you know, I swear"}
        />
        <Story
          img={"/assets/img/my-story-1.jpeg"}
          front={"My favorite subject was Math"}
          back={"I love it in high school. I guess it's the asian trait in me."}
        />
        <Story
          img={"/assets/img/classic-rock.jpeg"}
          front={"I love Classic Rock"}
          back={"I know a lot of music from 60s to 90s"}
        />
        <Story
          img={"/assets/img/guns n roses.jpeg"}
          front={"I've been to Guns n Roses show"}
          back={"That's my motivation to meet other music legends"}
        />
        {/* <Story
          img={"/assets/img/kinhdich.jpeg"}
          front={"I can do fortune telling"}
          back={"It's a long story"}
        /> */}
        <Story
          img={"/assets/img/so-ma.jpg"}
          front={"I am afraid of ghost"}
          back={"From baby to adult, still the same"}
        />
        <Story
          img={"/assets/img/tahien.jpeg"}
          front={"I like going to Ta Hien street"}
          back={"Feel like traveling because there are so many visitors"}
        />
        <Story
          img={"/assets/img/anhngua-3.jpeg"}
          front={"I tried to learn electric guitar"}
          back={
            "It broke when I moved house and still don't have money to fix it"
          }
        />
        <Story
          img={"/assets/img/mycay.jpeg"}
          front={"I really like spicy food"}
          back={"I can eat spicy noodles level 7"}
        />
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
