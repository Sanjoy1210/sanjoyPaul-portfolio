import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gwnlroh', 'template_8ibs5u8', form.current, 'user_CfTjr0fFXQQxIKXPrjanr')
      .then((result) => {
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.message.value = '';
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div id="contact" className="contact-area">
      <div className="contact-area-wrapper">
        <Container>
          <div className="section-title">
            <h4>Contact Me</h4>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row mx-auto">
              <div className="col-lg-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name" />
              </div>
              <div className="col-lg-8 form-group pt-2 mx-auto">
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
              </div>
              <div className="col-lg-8 form-group pt-2 mx-auto">
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              <div className="col-8 pt-3 text-center mx-auto">
                <input type="submit" className="btn send-btn" value="Send Message"></input>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;