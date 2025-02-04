import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Projects_Data from '../../Data/projects.json';
import './Projects.css';

export default function Projects(){

    return (
        <div className='page'>
            <div className="title">
                <h2>Projects</h2>
            </div>
            <div className="about">
                <p> 
                    &emsp; As a software developer, I have had the privilege of working on a diverse range of projects, 
                    from Web Development, Machine Learning, App Development, NLP, Computer Vision and more. 
                    Each project presented unique challenges and opportunities, and I am proud to have contributed my 
                    skills and creativity to their success.
                    <br/>
                    &emsp; Below, you'll find a selection of my publically available projects, along with a brief overview 
                    and attached documentation. 
                    If you have any questions or would like to discuss a potential project, 
                    please don't hesitate to <a href='mailto:ritvik916@gmail.com' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><b>contact</b></a> me. 
                    I'm always excited to hear about new opportunities and collaborations.
                </p>
            </div>

            <div className="subtitle">
                <h3>Projects</h3>
                <hr/>
            </div>
            <div className="content">
                {Projects_Data.Projects.map((proj, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5><a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color:"#0B58CA" }}>{proj.title}</a></h5>
                                <h6>{proj.duration}</h6>
                                <h6>{proj.type} | <i>{proj.organization}</i></h6>
                                <p>{proj.description}</p>
                            </div>
                        </div>
                ))}
            </div>


            
        </div>
    );
};

