import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m a passionate developer who loves building amazing applications.
          Explore my projects and get to know more about me!
        </motion.p>

        <motion.div
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="/projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
