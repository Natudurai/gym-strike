import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false); 

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setIsSubmitted(true); 
      })
      .catch(error => {
        alert('Error sending message.');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Contact for queries</p>
        <div className="contact-details">
          <p><strong>Phone:</strong>+91 9865961128</p>
          <p><strong>Email:</strong> Strike@gmail.com</p>
          <p><strong>Address:</strong> Strike fitness,Kovaipudur, CBE 641042</p>
          <p><strong>Office Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
          <div className="social-media">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="map-container">
          <iframe 
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0013544097343!2d77.01919121427678!3d10.992385558859604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c9c84f8f9b%3A0xdb0c4b5f4b2c4f3a!2sSri%20Krishna%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1632542824554!5m2!1sen!2sin"
            width="400"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send Us a Message</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {isSubmitted && <p className="feedback-message">Feedback sent!</p>}
    </section>
  );
};

export default Contact;
