import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Publications.css';
import Publications_Data from '../../Data/publications.json';

export default function Publications(){

    return (
        <div className='page'>
            <div className="title">
                <h2>Publications</h2>
            </div>
            <div className="about">
                <p> 
                    &emsp; These articles provide a conceptual overview of my research endevours. Find all available articles at 
                    <a href='https://scholar.google.com/citations?user=Qoo3fZIAAAAJ' target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"red"}}> Google Scholar</a>
                    <br/>
                </p>
            </div>
            <div className="subtitle">
                <h3>Publications</h3>
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

            
        </div>
    );
};

