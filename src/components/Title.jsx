import React, { Component } from 'react';

class Title extends  Component {
    render() {
    return (
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1>{this.props.title}</h1>
        </div>
    </div>
    );
    }
}

export default Title;