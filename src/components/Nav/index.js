import React from 'react';
import 'hamburgers/dist/hamburgers.min.css';

const Nav = () => (
  <nav
    className={`
      top-nav ph4
      flex flex-row
      items-center
      justify-between
    `}
  >
    <div className="logo">
      <h2 className={`fw4 f2 helvetica mv4 ttu`}>Doomed</h2>
    </div>
    <div className="menu">
      <button style={{ paddingRight: 0 }} className="hamburger hamburger--elastic pr0" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
    {/*
    <div className="filters">
      <input type="text" />
    </div>
    */}
  </nav>
);

export default Nav;
