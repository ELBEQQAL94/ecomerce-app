import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
   return (
    <Link to="/" className="navbar-brand" >
       <span className="store-brand">ystore</span>
       <i className="fas fa-shopping-bag shop-logo"></i>
    </Link>
   );
}

export default Logo;