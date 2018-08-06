import React, { Component } from 'react';

const MyHeader = props => (
  <header>
    <h1>
      {props.title}
    </h1>
    <h3>
        Your favorite color is:
      
      {props.color}
    </h3>
  </header>
);
export default MyHeader;
