/*

This file will be injected directly into the browser by karma.  This
means we can only use javaScript understood by the browser.

We CANNOT use:
  import / export /require
  JSX

React is also injected into the browser by Karma, so we can use React
but instead of

import React, { useState } from 'react';

and then setState(...) we must use React.setState(...)

Instead of JSX we must use React.createElement.  Shown below is
the equivalent JSX.

*/




class Hello extends React.Component {
  render() {
    /* <div id='react-element'>Hello ${this.props.toWhat}  */
    return React.createElement('div', {id:'react-element'},
      `Hello ${this.props.toWhat}`);
  }
}

const HelloFunctional = (props) => {
return React.createElement('div', {id:'react-element'},
  `HelloFunctional ${props.toWhat}`);
}

function ComponentWithState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);
/*  <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div> */
  return React.createElement('div', {id:'outer-wrapper'},
    React.createElement('p',
      {id:'count-result'}, `You clicked ${count} times`),
    React.createElement('button',
      {id:'count-button', onClick: ()=>setCount(count + 1)},
      'Click me')
    );
}
