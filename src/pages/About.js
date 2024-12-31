import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import htmlIcon from '../images/html.png';
import pythonIcon from '../images/python.png';
import mernIcon from '../images/mern.png';
import djangoIcon from '../images/django.png';
import springIcon from '../images/spring.png';
import gitIcon from '../images/git.png';

const skills = [
  { name: 'HTML, CSS & JavaScript', icon: htmlIcon },
  { name: 'Python, Java & C', icon: pythonIcon },
  { name: 'MERN Stack', icon: mernIcon },
  { name: 'Django (Python Full Stack)', icon: djangoIcon },
  { name: 'Spring Boot (Java Full Stack)', icon: springIcon },
  { name: 'Git & Version Control', icon: gitIcon },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>About Me</motion.h1>
        <motion.p variants={itemVariants}>
        I am a Computer Science Engineering student at KL University with a passion for full-stack development and data science. Skilled in MERN stack, Django, and Spring Boot, I develop scalable web applications and data-driven solutions. As a Red Hat Certified Developer, I enjoy creating efficient, dynamic projects and expanding my knowledge in machine learning and data analysis.
        </motion.p>

        {/* Education Section */}
        <motion.div className="section education" variants={itemVariants}>
          <h2>🎓 Education</h2>
          <ul>
            <li><strong>BTech in CSE</strong> - KL University (2022 - 2026)</li>
            <li><strong>Intermediate</strong> - Narayana Jr College (2020 - 2022)</li>
          </ul>
        </motion.div>

        {/* Achievements Section */}
        <motion.div className="section achievements" variants={itemVariants}>
          <h2>🏆 Achievements</h2>
          <ul>
            <li>Red Hat Certified Enterprise Application Developer</li>
          </ul>
        </motion.div>

        {/* Skills Grid Section */}
        <motion.div className="skills-grid section" variants={itemVariants}>
          <h2>🛠️ My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.1 }}
              >
                <img src={skill.icon} alt={skill.name} />
                <h3>{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
