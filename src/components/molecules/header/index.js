/* eslint react/prefer-stateless-function: 0 */
import React from 'react';
import cssModules from 'react-css-modules';
import MenuItem from '../../atoms/menu-item';
import MenuSettings from '../../atoms/menu-settings';
import styles from './header.scss';

const Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <ul styleName="header">
        <MenuItem
          active={this.context.router.isActive('clusters') ? 'yes' : 'no'}
          link="/clusters"
          name="Clusters"
        />
        <MenuItem
          active={this.context.router.isActive('services') ? 'yes' : 'no'}
          link="/services"
          name="Services"
        />
        <MenuItem
          active={this.context.router.isActive('provisions') ? 'yes' : 'no'}
          link="/provisions"
          name="Provisions"
        />
        <MenuSettings />
      </ul>
    );
  },
});

export default cssModules(Header, styles);
