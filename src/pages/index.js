import React from "react";
import { Link } from 'gatsby';
import "../components/index.css"


const index = () => {
  return (
    <header className='hero'>
      <div className='heroContainer'>
        <div className='heroInfo'>
          <h1>Logan P. McNatt</h1>
          <p>Cybersecurity and Information Design</p>
          <Link to="/about">See how we cna help. </Link>
        </div>
      </div>
    </header>
  );
}

export default index;
