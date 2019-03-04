import React from 'react';
import Logo from './Logo';
import Links from './Links';
import NavWrapper from './NavWrapper';
const Navbar = () => {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Logo />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav align-items-center ml-auto">
              <Links />
            </ul>
          </div>
        </div>
      </NavWrapper>
    );
}

export default Navbar;
