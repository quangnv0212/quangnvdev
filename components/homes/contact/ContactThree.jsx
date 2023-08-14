

import ContactForm from "./ContactForm";

export default function ContactThree() {
 
  return (
    <div className="bostami-page-content-wrap">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15">
          <h2 className="page-title">contact</h2>
        </div>
      </div>

      <div className="section-wrapper pr-60 pl-60 mb-60">
        <div className="contact-area bg-light-white-2">
          <h5 className="contact-title">Feel free to contact me!</h5>

          <ContactForm/>
        </div>
      </div>


    </div>
  );
}
