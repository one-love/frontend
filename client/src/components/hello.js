var React = require('react');

var LoginForm = React.createClass({
  render(){
    return(
      <div className="login jumbotron center-block">
      <h1>Login</h1>
      <form role="form">
      <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" className="form-control" id="username" placeholder="Username" />
      </div>
      <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" ref="password" placeholder="Password" />
      </div>
      <button className="btn btn-default">Submit</button>
      </form>
      </div>
    );
  }
});

module.exports = LoginForm;
