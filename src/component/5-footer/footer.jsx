import React from 'react';
import './Footer.css';

const Footer =() => {
    return (
      <footer className="fixed">
        <ul className="fixed">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          {/* <li>
            <a href="">contact</a>
          </li> */}
        </ul>

        <p>© 2025 Mahmoud Mohammed. All rights reserved.</p>
      </footer>
    );
}






export default Footer;