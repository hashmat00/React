var React = require('react');
var ReactDOM = require('react-dom');


var objOne = {
  name: 'hashmat',
  location: 'antioch'
};


var objTwo = {
  age: 25,
  ...objOne
};


console.log(objTwo);


ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
