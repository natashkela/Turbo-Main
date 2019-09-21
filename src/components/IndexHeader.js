import React from 'react';
import Searchbox from './Searchbox.js';
import Countview from './Countview.js';
import Navbar from './Navbar.js';
const IndexHeader = () => {
  return (
    <header className="header">
      <div className="header-body">
        <div className="header-overlay"></div>
        <div className="container">
          <h1>Turbo helps you</h1>
          <p>Rent car to move from local hosts in 190+ countries.</p>
          <Searchbox withoutBorder={true} />
          <Countview />
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default IndexHeader;
