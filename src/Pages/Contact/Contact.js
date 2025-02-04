import React from "react";
import './Contact.css';

function Contact(){
  return (
    <div className="contact-form">
        <div className="contact-title">
            <h2>Contact</h2>
        </div>
        <div className="contact-content">
            <p>Please fill the following form for any inquiries to ensure that your question is properly addressed. View form in <a href = "https://forms.gle/xjrrcXDjRtKNqkpXA" target="_blank" rel="noopener noreferrer"> new tab &gt;</a></p>
        </div>
        {/* <iframe
            title="Microsoft Form"
            src="https://forms.office.com/r/d13Usqp3wZ"
            width="70%" height="500px"
            align="center"
            frameborder="0" marginwidth="0" marginheight="0" >
        Loading...
        </iframe> */}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfcxXgAdoFZXJ1ntg0nGyk63ANMpLjUhEW16Tojj_vadpZtEA/viewform?embedded=true" 
          width="75%" height="500px" 
          frameborder="0" marginheight="0" marginwidth="0">
          Loading...
        </iframe>
    </div>
    
  );
};

export default Contact;
