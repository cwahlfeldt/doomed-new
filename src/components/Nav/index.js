import React from 'react';
import 'hamburgers/dist/hamburgers.min.css';

const Nav = () => (
  <nav
    className={`
      top-nav ph4
      flex flex-row
      items-center
      justify-between pv5-ns pv3
    `}
  >
    <header className="logo w-100">
      <h2
        style={{fontFamily: 'UnifrakturCook, cursive'}}
        className={`
          title near-black fw1 f1 mv4
          w-100 tc
        `}
      >
        Doomed
      </h2>
    </header>
    <div className="menu">
    </div>
  </nav>
);

export default Nav;
