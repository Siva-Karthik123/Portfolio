import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  const [currentWord, setCurrentWord] = useState('');
  const words = ['Web Developer', 'Designer', 'Creative Thinker'];
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const typeEffect = () => {
      const current = words[wordIndex.current];

      if (!isDeleting.current && charIndex.current < current.length) {
        charIndex.current += 1;
      } else if (isDeleting.current && charIndex.current > 0) {
        charIndex.current -= 1;
      } else {
        isDeleting.current = !isDeleting.current;
        if (!isDeleting.current) {
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }

      setCurrentWord(current.substring(0, charIndex.current));
    };

    const typingInterval = setInterval(typeEffect, 100);
    return () => clearInterval(typingInterval);
  }, [words]);  // Depend on words to avoid unnecessary re-renders

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="overlay"></div>

      <header className="header">
        <h1 className="title">
          Hi, I'm <span className="highlight">Siva Karthik</span>
        </h1>
        <h2 className="subtitle">
          I am a <span className="dynamic-text">{currentWord}</span>
        </h2>
        <a href="/projects" className="button">
          View Projects
        </a>
      </header>

      <section className="floating-elements">
        <div className="floating"></div>
        <div className="floating"></div>
        <div className="floating"></div>
      </section>
    </motion.div>
  );
}

export default Home;
