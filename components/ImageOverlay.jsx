import React from "react";
import "./ImageOverlay.css"; // Tạo một tệp CSS để tùy chỉnh giao diện nếu cần
import Image from "next/image";

const ImageOverlay = ({ img, content }) => {
  return (
    <div className="image-container">
      <Image
        width={200}
        height={200}
        src={img}
        alt="Background"
        className="background-image"
      />
      <div className="overlay">
        <div className="">
          <p className="text-center text-xl text-white">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
