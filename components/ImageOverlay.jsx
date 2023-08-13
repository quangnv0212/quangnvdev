import React from 'react';
import './ImageOverlay.css'; // Tạo một tệp CSS để tùy chỉnh giao diện nếu cần
import Image from 'next/image';

const ImageOverlay = () => {
  return (
    // <div className="image-overlay-container flex items-center justify-center">
    //   <Image
    //   width={50}
    //   height={50}
    //     src="https://www.alissanguyen.dev/images/facts/cat.jpg"
    //     alt="Background"
    //     className="background-image"
    //   />
 

    // </div>
    <div className="image-container">
      <Image
      width={50}
      height={50}
        src="https://www.alissanguyen.dev/images/facts/cat.jpg"
        alt="Background"
        className="background-image"
      />
      <div className="overlay">
      <div className='w-full h-full flex justify-center items-center'>
      <p className='text-center'>Tesst</p>

      </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
