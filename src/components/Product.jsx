import React from 'react';
import ProductWrapper from './ProductWrapper';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {  ProductConsumer } from '../Context';


const Product = props => {
    const {id,img, title, price, inCart} = props.product;
    return (

      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3 shadow-sm">
        <ProductConsumer>

          {value => {
            return (
        <div className="card py-3">

          <div className="title-card">
            <h5 className="h5 text-center text-dark">{title}</h5>
          </div>

          <div className="card-body">

              <div className="img-container p-5" onClick={() => value.handleDetails(id)}>

                  <Link to="/details">
                    <img className="card-img-top" src={img} alt={title} title={title} />
                  </Link>

              </div>

              <div className="card-footer">

                <div className="row">

                  <div className="col-md-6">
                  
                    <span className="h5 font-italic">{price}$</span>

                  </div>

                  <div className="col-md-6 ">

                    <button className={inCart ? 'btn btn-success btn-cart' : 'btn btn-primary btn-cart'} disabled={inCart?true:false} onClick={() => value.addToCart(id)}>
                      {inCart ? (<p className=" lead text-center text-capitalize text-dark mb-0 font-weight-bold font-italic" disabled>in cart</p>) : (<i className="fas fa-cart-plus"></i>)}
                    </button>

                  </div>

                </div>

              </div>

          </div>

        </div>);

        }}

        </ProductConsumer>
        
      </ProductWrapper>
    );
}

export default Product;

Product.propTypes = {
  Product: PropTypes.shape({
        id    : PropTypes.number,
        img   : PropTypes.string,
        title : PropTypes.string,
        price : PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}