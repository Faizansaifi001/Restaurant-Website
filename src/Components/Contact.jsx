import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> us
        </h1>
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3506.5526774105424!2d77.2351195745672!3d28.49301514040439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735237966527!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form>
            <h3>Get in Touch</h3>
            <div className="inputBox">
                <span className='fas fa-user'></span>
                <input type="text" placeholder='Name' />
            </div>
            <div className="inputBox">
                <span className='fas fa-envelope'></span>
                <input type="email" placeholder='Email' />
            </div>
            <div className="inputBox">
                <span className='fas fa-phone'></span>
                <input type="number" placeholder='Phone Number' />
            </div>
            <input type="submit" value="Contact Now" className='btn'/>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
