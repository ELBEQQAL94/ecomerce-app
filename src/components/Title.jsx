import React from 'react';

const Title  = props  => {

  const {title} = props;

    return (
          <h1 className="text-monospace mx-auto mt-5 text-center text-title font-weight-bold">{title}</h1>
    );
}

export default Title;