import React from 'react';
import './footer.css';

const Footer =() => {
    return (
      <footer className="text-center mt-2 py-2">
        <p className="text-[#ffffff] text-sm">
          © 2025 Mahmoud — All rights reserved.
        </p>
        <p className="text-[#ffffff]  text-sm mt-2">
          📧{" "}
          <a
            href="mailto:mohnud0987@gmail.com"
            className="dark:text-[#ffffff] hover:underline"
          >
            mohnud0987@gmail.com
          </a>{" "}
          | 📞{" "}
          <a
            href="tel:01009014597"
            className="dark:text-[#ffffff] hover:underline"
          >
            01009014597
          </a>
        </p>
      </footer>
    );
}






export default Footer;