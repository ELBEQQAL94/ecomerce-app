import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import {  ProductConsumer } from '../Context';

class Products extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <Title title="Products" />
            <div className="row mt-5">
                <ProductConsumer>
                  
                  {
                    value => {
                      return value.products.map(product => {
                        return (<Product key={product.id} product={product} />);
                      });
                    }
                  }
                </ProductConsumer>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Products;
