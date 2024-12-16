import React from 'react';
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div  id="skills" className='skills-container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-left'>
            <h2 className='skills-heading' >Technologies I Work With</h2>
            <p className='skills-text'>
                I have a solid foundation in web development, specializing in HTML, CSS, TYPESCRIPT and JAVASCRIPT. My experience extends to using frameworks like React and Next.js to create dynamic and user friendly application in tailwind css for efficient styling and design
            </p>
        </div>
        <div className="skills-right">
        <div className="skills-icons-grid">
<div  className="skills-space">
<h2 data-aos="zoom-in-up">Typescript</h2>
<h2 data-aos="zoom-in-up">React.js</h2>
<h2 data-aos="zoom-in-up">Next.js</h2>
</div>
<div  className="skills-space">

<h2 data-aos="zoom-in-up">Tailwind</h2>
<h2 data-aos="zoom-in-up">Css</h2>
<h2 data-aos="zoom-in-up">Node.js</h2>
</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Skills;
