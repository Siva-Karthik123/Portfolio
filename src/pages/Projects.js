import React from 'react';
import '../styles/Projects.css';
import image1 from '../images/project1.png';
import image2 from '../images/project2.png';

const projects = [
  {
    title: 'Automobile Management System',
    tech: 'Python Full Stack (Django)',
    description: 'Implemented responsive design using Bootstrap, ensuring seamless access across different devices. Created robust backend functionalities with Django, ensuring efficient database management.',
    image: image1,
    link: 'https://sivakarthik123.pythonanywhere.com/',
  },
  {
    title: 'Pet Adoption Management System',
    tech: 'MERN Stack',
    description: 'Developed a pet adoption and accessories management system using MERN stack to streamline operations. Crafted mobile-responsive components using the React framework, achieving faster load times that reduced bounce rates from potential adopters by 15%.',
    image: image2,
    link: 'https://example.com/',
  },
];

function Projects() {
  return (
    <section className="projects">
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

      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Open →</button>
            </a>
          </div>
        ))}
      </div>
      <br />
      <h3 style={{ textAlign: 'center' }}>New Projects Coming Soon.....</h3>
    </section>
  );
}

export default Projects;
