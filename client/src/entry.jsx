var React = require('react');
var ReactDom = require('react-dom');
var Hello = require('./components/hello.jsx');

ReactDom.render(
  <Hello />,
  document.getElementById('ReactApp')
);
