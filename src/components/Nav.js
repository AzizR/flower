import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
      <Link to='/'>
        <h1 className='logo'>Flowers</h1>
      </Link>
    </div>
  );
}

export default Nav;
