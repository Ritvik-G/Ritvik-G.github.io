import React from "react";
import './About.css';

function About(){
  return (
    <div className="about">
        <div className="title">
            <h2>About</h2>
        </div>
        <div className="about-about">
            <p>
                Hi 👋 I'm Ritvik Garimella (Ritvik)
                <br/><br/>
                I’m a first-year Master's student at the University of South Carolina, pursuing Computer Science and serving as a <b>Research Assistant</b> at the Artificial Intelligence Institute (AIISC) under the guidance of <a href="https://amit.aiisc.ai/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"red"}}><b>Dr. Amit Sheth</b></a>.
                My research is focused on developing sustainable, human-centric, and value-aligned AI models, as well as creating affordable, accessible, and coherent applications that enhance efficiency, foster innovation, and contribute to social good.
                <br/>Beyond research, I'm a <b>Lab Assistant</b> for CSCE101 and CSCE102, where I assist students in learning programming fundamentals through Python and exploring programming applications with HTML, CSS, and JavaScript.
                <br/><br/>
                Aside my academic pursuits, I serve as the <b>Secretary General</b> for the Alumni Association (AlmaConnect) of NIT Andhra.
                In my free time, I like to play badminton 🏸 , hike 🥾 or watch documentaries 🎥.
                <br/><br/>
                <a style={{textDecoration:'underline'}}><b>Top Skills</b></a> : <b>Artificial Intelligence</b> • <b>Full Stack Development</b> • <b>Human Computer Interaction</b>
                <br/><br/>
                Feel free to reach out by dropping an <a target="_blank" rel="noopener noreferrer" href="mailto:ritvikg@email.sc.edu" style={{textDecoration:'none'}}><b>email</b></a> or connecting on <a target="_blank" rel="noopener noreferrer" href = 'https://www.linkedin.com/in/ritvikg/' style={{textDecoration:'none'}}><b>LinkedIn</b></a> to explore potential collaborations or just to chat about the fascinating world of AI!
            </p>
        </div>

        <div className="about-subtitle">
            <h3>Coming Soon</h3>
            <hr/>
        </div>


    </div>
    
  );
};

export default About;
