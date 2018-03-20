import React from 'react';
import 'hamburgers/dist/hamburgers.min.css';

const Nav = () => (
  <nav
    className={`
      top-nav
      flex flex-row
      items-center
    `}
  >
    <div className="logo">
      <h2>Doomed</h2>
    </div>
    <div className="menu">
      <button className="hamburger hamburger--elastic" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div className="filters">
      <input type="text" />
    </div>
  </nav>
);

export default Nav;
