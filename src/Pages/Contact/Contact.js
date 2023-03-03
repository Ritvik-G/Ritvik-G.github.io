import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form">
        <div className="contact-title">
            <h2>Contact</h2>
        </div>
        <div className="contact-content">
            <p>Please fill the following form for any inquiries to ensure that your question is properly addressed.</p>
        </div>
        <iframe
            title="Microsoft Form"
            src="https://forms.office.com/r/d13Usqp3wZ"
            width="70%" height="500px"
            align="center"
            frameborder="0" marginwidth="0" marginheight="0" >
        Loading...
        </iframe>
    </div>
    
  );
};

export default Contact;
