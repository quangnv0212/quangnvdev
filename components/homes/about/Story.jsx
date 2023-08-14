import ImageOverlay from '@/components/ImageOverlay';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Story = ({img,front,back}) => {
    const [showSlider, setShowSlider] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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
        <div className='m-2'      onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <ReactCardFlip isFlipped={isHovered} flipDirection="vertical">
    <ImageOverlay img={img} content={front}/>
    <ImageOverlay img={"/assets/img/bg-white.png"} content={back}/>
        </ReactCardFlip>
        </div>
    );
};

export default Story;