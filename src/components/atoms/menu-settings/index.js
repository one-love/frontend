import React from 'react';
import gear from './gear.svg';
import cssModules from 'react-css-modules';
import Sidebar from '../sidebar';
import styles from './menu-settings.scss';


const MenuSettings = React.createClass({
  getInitialState() {
    return {};
  },

  showSettings() {
    this.setState({ show: true });
  },

  hideSettings() {
    this.setState({ show: false });
  },

  render() {
    const showSettings = this.state.show ? '' : this.showSettings;
    let content = '';
    if (this.state.show) {
      content = (
        <div
          className="disable"
          onClick={this.hideSettings}
          style={{
            zIndex: 10,
            marginTop: '-10px',
          }}
        >
          x
        </div>
      );
    }
    return (
      <li styleName="menu-settings" onClick={showSettings}>
        <div styleName="image">
          <img alt="menu-settings" src={gear} />
        </div>
        <Sidebar show={this.state.show}>
          {content}
        </Sidebar>
      </li>
    );
  },
});


export default cssModules(MenuSettings, styles);
