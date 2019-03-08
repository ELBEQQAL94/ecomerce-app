import React, { Component } from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';
import Button from './Button';
import {  ProductConsumer } from '../Context';

class Details extends Component {
  render() {
    return (
            <ProductConsumer>
              {value => {
                const {id, title,img, price, company, info, inCart} = value.details;
                    return (
                    <div className="container">

                        <Title title={title} />
      
                      <div className="row mt-5">

                          <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-3">
                              <img className="img-fluid" src={img} alt={title} title={title} />
                          </div>

                          <div className=" col-lg-6 col-md-6 col-sm-12 mx-auto my-3">
                              <h4 className="text-capitalize">model : <span className="font-italic">{title}</span></h4>
                              <h4 className="text-capitalize">price: <span className="font-italic">{price}$</span></h4>
                              <h4 className="text-capitalize">made by: <span className="font-italic">{company}</span></h4>
                              <p className="lead">{info}</p>
                              <div className="row">
                                <div className="col-md-6">
                                  <Link to="/" className="nav-link text-capitalize" >
                                    <Button className="bg-light text-dark border border-info rounded">
                                      back to products
                                    </Button>
                                  </Link>
                                </div>
                                
                                <div className="col-md-6 nav-link text-capitalize">
                                <Button onClick={() => value.addToCart(id)} disabled={inCart ? true : false} className="bg-light text-dark border border-success rounded" >
                                        {inCart ? 'in cart' : 'add to cart'}       
                                </Button>
                                </div>

                              </div>
                          </div>
                      </div>

                    </div>
                    );
              }}
            </ProductConsumer>
            );     
  }
}

export default Details;
