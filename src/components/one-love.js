import React from 'react';
import { Link } from 'react-router';

function OneLove() {
  return (
    <main className="app">
      <Link to="/clusters/" > clusters </Link>
      <Link to="/services/" > services</Link>
    </main>
  );
}


export default OneLove;
