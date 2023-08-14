import React from 'react';
import './ImageOverlay.css'; // Tạo một tệp CSS để tùy chỉnh giao diện nếu cần
import Image from 'next/image';

const ImageOverlayConent = ({img,content}) => {
  return (
    <div className="image-container">
      <Image
      width={50}
      height={50}
        src={"/assets/img/bg-white.png"}
        alt="Background"
        className="background-image"
      />
      <div className="overlay-content">
      <div className='w-full h-full it'>
      <p className='text-center text-xl text-white'>{content}</p>
      </div>
      </div>
    </div>
  );
};

export default ImageOverlayConent;
