import React from 'react';
import img1 from '../../Media/profile4.jpg';
import img2 from '../../Media/profile5.jpg';
import img3 from '../../Media/profile3.jpg';
import './Home.css';
import News_Data from '../../Data/news.json';

function Home() {
    return (
      <>
      <div className='profile-card'>
        <div className='profile-content'>
            <p>
                <h3><b>Ritvik</b> Garimella</h3>
                M.Sc. Computer Science, <a href="https://amit.aiisc.ai/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"red"}}><b>University of South Carolina</b></a>. 
                <br/><br/>
                I’m a <b>Research Assistant</b> at the Artificial Intelligence Institute (AIISC) under the guidance of <a href="https://amit.aiisc.ai/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"red"}}><b>Dr. Amit Sheth</b></a>.
                <br/><br/>
                My work centers on developing custom, compact, value-aligned, and agile AI models through <a href="https://en.wikipedia.org/wiki/Neuro-symbolic_AI" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>NeuroSymbolic </a> 
                approaches, with a focus on creating affordable, accessible, and <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>Human-Centric Applications </a> that enhance efficiency, drive innovation, and contribute to social good.                
                <br/>
                Beyond research, I serve as a <b>Lab Assistant</b> for CSCE101 and CSCE102, where I help students learn programming fundamentals using Python and explore practical applications of programming with HTML, CSS, and JavaScript.                
                <br/><br/>
                In addition to my academic endeavors, I hold the position of <b>Secretary General</b> for the Alumni Association (AlmaConnect) at NIT Andhra, where I earned my undergraduate degree in computer science.
                <br/><br/>
                <a style={{textDecoration:'underline'}}><b>Top Skills</b></a> : <b>Artificial Intelligence</b> • <b>Full Stack Development</b> • <b>Human Computer Interaction</b>
                </p>
        </div>
        <img src={img1} className='profile-image' alt='Profile'/>
      </div>

      <div id="home-middle-div" className='profile-card'>
        <img src={img2} className='profile-image' alt='Profile'/>
        <div className='profile-card-content'>
            <h3>Recent News</h3>
            <hr/>
            {News_Data.News.map((news, index) => (
              <div key={index} className='home-item'>
                <p><b>{news.date}:</b><a href={news.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" , color:"#0B58CA" }}> {news.title}</a> ({news.organization}), {news.description}</p>        
              </div>
            ))}
        </div>
      </div>


      <div className='profile-card'>
        <div className='profile-card-content'>
          <h3>Contact</h3>
          <hr/>
          Feel free to reach out via <a href='mailto:ritvik916@gmail.com' target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><b>Email</b></a> or connect on <a target="_blank" rel="noopener noreferrer" href = 'https://www.linkedin.com/in/ritvikg/' style={{textDecoration:'none'}}><b>LinkedIn </b></a> 
          to explore potential collaborations or if you wanna chat about the fascinating world of AI!
          <br/><br/>
        </div>
        <img src={img3} className='profile-image' alt='Profile'/>
      </div>
      </>
    );
  }
  export default Home;