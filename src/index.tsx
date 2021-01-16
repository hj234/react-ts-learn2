import React from 'react';
import ReactDOM from 'react-dom';
import HelloHOC from './components/demo/HelloHOC';
import HelloHooks from './components/demo/HelloHooks';
// import HelloClass from './components/demo/HelloClass';
// import Hello from './components/demo/Hello';


ReactDOM.render(
  <HelloHooks name="Typescript"/>,
  document.getElementById('root')
);
