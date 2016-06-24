import React from 'react';
import { Link } from 'react-router';
import store from '../../store';
import actions from './actions';
import gear from '../../../media/img/gear.svg';


const Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  handleOnClick() {
    store.dispatch(actions.show());
  },

  render() {
    return (
      <ul className="o-layout o-list-inline header">
        <li
          className={this.context.router.isActive('clusters') ? 'active' : ''}
        >
          <Link to="/clusters/">Clusters</Link>
        </li>
        <li
          className={this.context.router.isActive('services') ? 'active' : ''}
        >
          <Link to="/services/">Services</Link>
        </li>
        <li
          className={this.context.router.isActive('provisions') ? 'active' : ''}
        >
          <Link to="/provisions/">Provisions</Link>
        </li>
        <li className="u-fr" onClick={this.handleOnClick}>
          <div>
            <img src={gear} alt="gear" />
          </div>
        </li>
      </ul>
    );
  },
});

export default Header;
