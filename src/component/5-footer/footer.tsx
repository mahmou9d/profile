import React from 'react';
import './footer.css';

const Footer =() => {
    return (
      <footer className="fixedd">
        <ul className="fixedd">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/About">My Skills</a>
          </li>
          {/* <li>
            <a href="">contact</a>
          </li> */}
        </ul>

        <p>
          © 2025 <span>Mahmoud Mohammed</span>. All rights reserved.
        </p>
      </footer>
    );
}






export default Footer;