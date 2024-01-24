import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

       <div>
          <h1>Shop&Have</h1>
       </div>
       <div>
          <input type="text" placeholder='Search for the happiness....' />
       </div>
       <div>
           <button>Login</button>
       </div>
    </div>
  )
}
