import React from 'react';
import Heading from './Heading';
import Card from './Card';
import "../app/styles/project.css";

const data = [
{
  id: 0,
  title: "Todo List",
  desc: "A React & Typescript based app for managing and organizing your task efficiently.",
  img: "/project_01.png",
  tags: ["React", "Node", "Css", "Typescript"],
},
{
  id: 1,
  title: "Countdown Timer",
  desc: "A Next.js & Typescript powered website to track time an interactive countdown feature.",
  img: "/project_2.png",
  tags: ["React", "Node", "Css", "Typescript"],
},
{
  id: 2,
  title: "Weather Widget",
  desc: "A Next.js & Typescript based tool for fetching and displying real-time weather data.",
  img: "/project_03.png",
  tags: ["React", "Node", "Css", "Typescript"],
},
{
  id: 4,
  title: "E-Commerce Website",
  desc: "A simple HTML & Typescript powered tool for converting currencies with real-time rates.",
  img: "/project_04.png",
  tags: ["React", "Node", "Css", "Typescript"],
},
{
  id: 5,
  title: "Personal Website",
  desc: "A simple HTML & Typescript powered tool for converting currencies with real-time rates.",
  img: "/project_05.png",
  tags: ["React", "Node", "Css", "Typescript"],
},

]


const Projects = () => {
    return (
        <div id="projects" className='project-container'>
          <Heading title="My Projects" />
          <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
            {data.map((el) => (
              <Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
              />
            ))}
          </div>
        </div>
      );
    };

export default Projects;




          
