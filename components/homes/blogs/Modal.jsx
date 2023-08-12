import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm'

export default function Modal({ modalContent, setModalContent }) {
  return (
    <div
      className={`modal h1-modal-box fade ${modalContent ? "show" : ""} `}
      id="h1-blog-1"
      tabindex="-1"
      role="dialog"
      style={{
        transition: "0.4s",
        display: `${modalContent ? "block" : "block"}`,
        visibility: `${modalContent ? "visible" : "hidden"}`,
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              onClick={() => setModalContent()}
            >
              <i className="far fa-times"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="h1-modal-img">
              <Image
                width={800}
                height={800}
                src={modalContent?.imgSrc}
                style={{ width: "100%",height: "fit-content",maxHeight: "450px",objectFit:'cover'  }}
                alt="blog"
              />
            </div>

            <div className="blog-meta">
              <span className="blog-date">{modalContent?.date}</span>
              <span className="blog-cetagory">{modalContent?.category}</span>
            </div>



    

            <div className="h1-modal-comment-box">
              <h2 className="title">Leave a Reply</h2>
              <textarea
                cols="30"
                rows="10"
                placeholder="write comment"
              ></textarea>
              <button>comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
