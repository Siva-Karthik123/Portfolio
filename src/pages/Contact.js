import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_afbglhq', 
      'template_opl26vi',
      e.target,
      'KRXSACGPr3uJiQxC1'
    )
    .then((result) => {
      setFormStatus('Thank you for reaching out! I’ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      setFormStatus('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <section className="contact">
      <div className="particles">
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></span>
        ))}
      </div>
      {/* Social Media Section */}
      <div className="socials">
        <h3>Connect With Me</h3>
        <div className="social-icons">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={handleSubmit}
      >
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
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Send
        </motion.button>
      </motion.form>

      {formStatus && (
        <motion.p
          className="form-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {formStatus}
        </motion.p>
      )}

      
    </section>
  );
}

export default Contact;
