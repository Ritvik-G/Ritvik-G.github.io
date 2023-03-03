import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import {FaLinkedinIn,FaGithub} from 'react-icons/fa';

function Footer() {
    return (
      <MDBFooter className='bg-white text-center text-muted'>
        <hr/>
        <div>
            <a href='https://github.com/Ritvik-G' className=' text-reset'>
              <FaGithub/>
            </a>
            &emsp;
            <a href='https://www.linkedin.com/in/ritvikg/' className='text-reset'>
              <FaLinkedinIn/>
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