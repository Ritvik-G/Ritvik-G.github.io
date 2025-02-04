import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import {FaLinkedinIn,FaGithub,FaOrcid,FaGraduationCap} from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

const Footer = () => {
    return (
      <MDBFooter className="footer text-muted text-center">
        <hr/>
        <div>
            <a href='https://www.linkedin.com/in/ritvikg/' target="_blank" rel="noopener noreferrer" className='text-reset'>
              <FaLinkedinIn/>
            </a> 
            &emsp;
            <a href='https://github.com/Ritvik-G' target="_blank" rel="noopener noreferrer" className='text-reset'>
              <FaGithub/>
            </a>
            &emsp;
            <a href='https://scholar.google.com/citations?user=Qoo3fZIAAAAJ' target="_blank" rel="noopener noreferrer" className='text-reset'>
              <FaGraduationCap/>
            </a>
            &emsp;
            <a href='https://orcid.org/0009-0004-7472-4690' target="_blank" rel="noopener noreferrer" className='text-reset'>
              <FaOrcid/>
            </a>
            &emsp;
            <a href='https://bsky.app/profile/ritvikg.bsky.social' target="_blank" rel="noopener noreferrer" className='text-reset'>
              <FaBluesky/>
            </a>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Ritvik G.</span>
            <br/><br/>
        </div>
      </MDBFooter>
    );
  }
  export default Footer;