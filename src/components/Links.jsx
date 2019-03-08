import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
const Links = () => {
    return (
    <React.Fragment>
        <li className="nav-item ml-3 active">
            <Link to="/" className="nav-link products text-capitalize" >
                products
            </Link>
        </li>
        <li className="nav-item ml-3 active">
            <Link to="/cart" className="nav-link text-capitalize" >
                <Button>
                    <i className="fas fa-cart-plus"></i> my cart
                </Button>
            </Link>
        </li>
    </React.Fragment>
    );
}

export default Links;