import React, { Component } from 'react'
import Title from './Title';
class Page404 extends Component {
  render() {
    return (
     <React.Fragment>
       <Title title="404 Ooops!" />
       <p className="lead">Oops, we don't have this page!</p>
     </React.Fragment>
    );
  }
}

export default Page404;
