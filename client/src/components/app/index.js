import React from 'react';
import { Link } from 'react-router';


const OneLove = React.createClass({
  render() {
    return (
      <main className="app">
        <Link to="/login">Go to Login</Link><br />
        <Link to="/logout">Go to Logout</Link>
      </main>
    );
  },
});


export default OneLove;
