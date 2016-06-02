import React from 'react';
import { Link } from 'react-router';
import store from '../../store';
import actions from './actions';


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
        <li className=
          {this.context.router.isActive('clusters') ? 'active' : ''}
        >
          <Link to="/clusters/">Clusters</Link>
        </li>
        <li className=
          {this.context.router.isActive('services') ? 'active' : ''}
        >
          <Link to="/services/">Services</Link>
        </li>
        <li className=
          {this.context.router.isActive('provisions') ? 'active' : ''}
        >
          <Link to="/provisions/">Provisions</Link>
        </li>
        <li className="u-fr" onClick={this.handleOnClick}>
          <div>
            <svg width="25" height="25">
              <g id="cog" transform="scale(0.5)">
                <path
                  fill="#cccccc"
                  d="M44,24.707v-5.5l-6.574-2.738c-0.184-0.516-0.377-1.015-0.613-1.505l2.656-6.606l-3.891-3.889l-6.549,2.696
      c-0.498-0.242-1.008-0.445-1.535-0.634L24.707,0h-5.5l-2.718,6.509c-0.548,0.194-1.075,0.397-1.595,0.646L8.357,4.528L4.469,8.416
      l2.665,6.478c-0.259,0.532-0.467,1.074-0.667,1.633L0,19.293v5.5l6.472,2.697c0.199,0.559,0.413,1.1,0.67,1.633l-2.615,6.52
      l3.888,3.889l6.494-2.676c0.522,0.248,1.054,0.447,1.601,0.635L19.293,44h5.5l2.721-6.543c0.523-0.193,1.039-0.396,1.533-0.633
      l6.596,2.643l3.889-3.889l-2.709-6.562c0.232-0.494,0.418-0.994,0.602-1.504L44,24.707z M21.957,31.583
      c-5.289,0-9.582-4.292-9.582-9.583s4.293-9.583,9.582-9.583c5.292,0,9.583,4.293,9.583,9.583S27.248,31.583,21.957,31.583z"
                />
              </g>
            </svg>
          </div>
        </li>
      </ul>
    );
  },
});

export default Header;
