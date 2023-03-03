import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Projects.css';

function Projects(){

    return (
        <div className='projects'>
            <div className="projects-title">
                <h2>Projects</h2>
            </div>
            <div className="projects-about">
                <p> 
                    &emsp; As a software developer, I have had the privilege of working on a diverse range of projects, 
                    from Web Development, Machine Learning, App Development, NLP, Computer Vision and more. 
                    Each project presented unique challenges and opportunities, and I am proud to have contributed my 
                    skills and creativity to their success.
                    <br/>
                    &emsp; Below, you'll find a selection of my publically available projects, along with a brief overview 
                    and attached documentation. 
                    If you have any questions or would like to discuss a potential project, 
                    please don't hesitate to <a href='/contact' style={{textDecoration:"none"}}>contact</a> me. 
                    I'm always excited to hear about new opportunities and collaborations.
                </p>
            </div>
            <div className="projects-subtitle">
                <h3>GitHub Stats</h3>
                <hr/>
            </div>
            <div className="projects-content">
                <GitHubCalendar username="ritvik-g" />
            </div>

            
        </div>
    );
};

export default Projects;
