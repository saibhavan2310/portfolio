
import Particle from "../Particle"; // Import the CSS file
import React from "react";
import "../../style.css"; // Ensure the global CSS file is imported

function Contact() {
  return (
    <div className="contact-page">
      <Particle /> {/* Add the particle background */}
      <div className="contact-container">
        <h2 className="contact-heading">Contact Information</h2>
        <p className="contact-detail">
          Name: <span className="contact-info">Sai Bhavan Gubbala</span>
        </p>
        <p className="contact-detail">
          Email: <a href="mailto:saibhavan9@gmail.com">saibhavan9@gmail.com</a>
        </p>
        <p className="contact-detail">
          Phone/Whatsapp: <a href="tel:+9398810746">+91 93988 10746</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;



