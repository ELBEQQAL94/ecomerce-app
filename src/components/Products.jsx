import React, { Component } from 'react';
import Title from './Title'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
       products : []
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="our products" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
