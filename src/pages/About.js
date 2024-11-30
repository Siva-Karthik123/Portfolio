import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="about">
      <div className="particles">
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 10}s`,
            }}
          ></span>
        ))}
      </div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>About Me</motion.h1>
        <motion.p variants={itemVariants}>
        Hello! I’m a web developer in pursuit of excellence, currently a BTech CSE 3rd-year student at KL University. My expertise spans frontend and backend development, including MERN, Django, and Spring Boot stacks. A certified Red Hat Enterprise Application Developer, I thrive on creating dynamic, user-friendly applications that solve real-world challenges. With a commitment to continuous learning, I aim to merge technology and creativity to build innovative, impactful solutions. 🚀
        </motion.p>

        <motion.div className="section education" variants={itemVariants}>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor of Technology in Computer Science</strong> - KL
              University (2022 - 2026)
            </li>
            <li>
              <strong>Intermediate</strong> - Narayana Jr College (2020 - 2022)
            </li>
          </ul>
        </motion.div>

        

        <motion.div className="section achievements" variants={itemVariants}>
          <h2>Achievements</h2>
          <ul>
            <li>Red Hat Certified Enterprise Application Developer - Red Hat</li>
          </ul>
        </motion.div>

        <motion.div className="section skills" variants={itemVariants}>
          <h2>My Skills</h2>
          <ul>
            <motion.li whileHover={{ scale: 1.05 }}>HTML , CSS & JavaScript</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Python , Java & C</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>MERN Stack</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Python Full Stack(Django)</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Java Full Stack(SpringBoot)</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Node.js & Express</motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>Git & Version Control</motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
