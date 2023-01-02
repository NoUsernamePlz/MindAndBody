import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
       <h1>Mind&Body</h1> 
       <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#products"}>Products</HashLink>
        <HashLink to={"/service"}>Services</HashLink>
       </main>
    </nav>
  
  )
}

export default Header