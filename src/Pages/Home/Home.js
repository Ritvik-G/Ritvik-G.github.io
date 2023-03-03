import React from 'react';
import profile from '../../Media/profile2.png';
import './Home.css';

function Home() {
    return (
      <>
      <div className='profile-card'>
        <div className='profile-content'>
            <p>I am Ritvik G <br/></p>
            <p>An Inquisitive and Energetic Computer Science Undergrad with over 7 years of experience in programming.</p>
            <p>I am passionate about creating digital software solutions to the real world problems that make our lives easier and better.</p>
            <a href="/about" style={{textDecoration: "none",color:"black",fontWeight:"bold"}}>Learn More &gt;</a>
        </div>
        
        <img src={profile} className='profile-image' alt='Profile'/>
        
      </div>
      </>
    );
  }
  export default Home;