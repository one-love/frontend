var React = require('react');
var ReactDom = require('react-dom');
var LoginForm = require('./components/hello');

ReactDom.render(
  <LoginForm />,
  document.getElementById('ReactApp')
);
