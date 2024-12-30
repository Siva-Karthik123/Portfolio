

import React from 'react';
import '../styles/Projects.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

const projectList = [
  {
    title: 'Automobile Management System',
    tech: 'Python Full Stack (Django)',
    description: 'Implemented responsive design using Bootstrap, ensuring seamless access across different devices. Created robust backend functionalities with Django, ensuring efficient database management.',
    image: project1,
    link: 'https://sivakarthik123.pythonanywhere.com/',
  },
  {
    title: 'Online Workshop Management System',
    tech: 'Java full Stack',
    description: 'It will further developed to streamline and optimize every aspect of workshop management. With intuitive tools for scheduling, resource allocation, and progress tracking, this platform ensures efficient and effective operations. Whether you are managing a small local workshop or a large-scale training facility, this tool is built to meet all your needs with ease and reliability.',
    image: project3,
    link: 'https://workshopmanagement.vercel.app/',
  },
  {
    title: 'Pet Adoption Management System',
    tech: 'MERN Stack',
    description: 'Developed a pet adoption and accessories management system using MERN stack to streamline operations. Crafted mobile-responsive components using the React framework, achieving faster load times that reduced bounce rates from potential adopters by 15%.',
    image: project2,
    link: 'https://siva-karthik123.github.io/sdp-paams/',
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-intro">
          A curated collection of my latest work showcasing innovative solutions and creative designs.
        </p>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-inner">
                <img src={project.image} alt={project.title} />
                <div className="card-details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <span>{project.tech}</span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="project-btn">
                      Visit <FaExternalLinkAlt />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <h3 style={{ textAlign: 'center' }}>New Projects Coming Soon.....</h3>
      </div>
    </section>
  );
}

export default Projects;
