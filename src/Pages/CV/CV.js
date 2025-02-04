import React from 'react';
import './CV.css';

import Education_Data from '../../Data/education.json';
import Experience_Data from '../../Data/experience.json';
import Publications_Data from '../../Data/publications.json';
import Teaching_Data from '../../Data/teaching.json';
import Certification_Data from '../../Data/certifications.json';
import Volunteer_Data from '../../Data/volunteering.json';
import Skills_Data from '../../Data/skills.json';
import Awards_Data from '../../Data/awards.json';


export default function CV(){

    return (
        <div className='page'>
            <div className="title">
                <h2>Curriculum Vitae</h2>
            </div>
            <div className="about">
                <p> 
                    Prefer a printable version? <a href="/pdfs/cv.pdf" target="_blank" rel="noopener noreferrer" download="cv.pdf" style={{textDecoration:"none", color:"red"}}><b>💾 Download CV </b></a>
                    <br/>
                    Prefer a shorter version? <a href="/pdfs/resume.pdf" target="_blank" rel="noopener noreferrer" download="resume.pdf" style={{textDecoration:"none", color:"red"}}><b>💾 Download Resume </b></a>
                    <br/>
                </p>
            </div>

            <div className="subtitle">
                <h3>🎓 Education</h3>
                <hr/>
            </div>
            <div className="content">
                {Education_Data.Education.map((edu, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5><a href={edu.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color:"#0B58CA", }}>{edu.institution}</a></h5>
                                <p>{edu.degree} | <i>{edu.duration}</i></p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>

            <div className="subtitle">
                <h3>💼 Experience</h3>
                <hr/>
            </div>
            <div className="content">
                {Experience_Data.Experience.map((exp, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5>{exp.role}, <a href = {exp.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#0B58CA"}}>{exp.organization}</a></h5>
                                <h6>{exp.category} - {exp.type} </h6>
                                <p>{exp.duration} | {exp.location}</p>
                                <p style={{ whiteSpace: "pre-line" }}>{exp.description}</p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>

            <div className="subtitle">
                <h3>📚 Publications</h3>
                <hr/>
            </div>
            <div className="content">
                {Publications_Data.Publications.map((pub, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5><a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color:"#0B58CA" }}>{pub.title}</a></h5>
                                <p>{pub.type} | <i>{pub.publication}</i> - {pub.date}</p>
                                <p>{pub.description}</p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>

            <div className="subtitle">
                <h3>🏫 Teaching</h3>
                <hr/>
            </div>
            <div className="content">
                {Teaching_Data.Teaching.map((teach, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5>{teach.role}, {teach.course}</h5>
                                <h6>{teach.duration} | <a href={teach.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color:"#0B58CA" }}>{teach.organization}</a></h6>
                                <p>{teach.description}</p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>

            <div className="subtitle">
                <h3>🪪 Certifications</h3>
                <hr/>
            </div>
            <div className="content">
                {Certification_Data.Certifications.map((cert, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5>{cert.name} - {cert.description}</h5>
                                <p>{cert.issuer} | <i>{cert.date}</i></p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>

            <div className="subtitle">
                <h3>🙋‍♂️ Volunteering</h3>
                <hr/>
            </div>
            <div className="content">
                {Volunteer_Data.Volunteering.map((vol, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5>{vol.role}, <a href = {vol.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#0B58CA"}}>{vol.organization}</a></h5>
                                <h6>{vol.category} - {vol.type} </h6>
                                <p>{vol.duration} | {vol.location}</p>
                                <p style={{ whiteSpace: "pre-line" }}>{vol.description}</p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>

            <div className="subtitle">
                <h3>⚒️ Skills</h3>
                <hr/>
            </div>
            <div className="content">
                {Object.entries(Skills_Data.Skills).map(([category, skills], index) => (
                    <div key={index} className='item'>
                        <div className="headings">
                                <h5>{category} </h5>
                                <h6>
                                    {skills.map((skill, idx) => ( 
                                        <span key={idx}>{skill}{idx < skills.length - 1 ? ', ' : ''}</span> 
                                    ))}
                                </h6>
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            
            <div className="subtitle">
                <h3>🏆 Honors and Awards</h3>
                <hr/>
            </div>
            <div className="content">
                {Awards_Data.Awards.map((awa, index) => (
                        <div key={index} className='item'>
                            <div className="headings">
                                <h5>{awa.title}, <a href = {awa.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#0B58CA"}}>{awa.organization}</a></h5>
                                <h6><i>{awa.date}</i></h6>
                                <p>{awa.description}</p>
                            </div>
                        </div>
                ))}
            </div>
            <br/>
            
        </div>
    );
};
