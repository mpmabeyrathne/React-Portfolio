import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        {/* Contact options */}

        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline />
            <h4>Email</h4>
            <h5>pasindumaduwantha2019@gmail.com</h5>
            <a href="mailto:pasindumaduwantha2019@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Pasindu Maduwantha</h5>
            <a href="https://m.me/pasindu.maduwantha.3150">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+94788193729</h5>
            <a href="https://api.whatsapp.com/send?phone=+94788193729">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
