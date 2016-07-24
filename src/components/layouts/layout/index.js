import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import store from '../../../store';
import Landing from '../../pages/landing';
import Settings from '../../molecules/settings';
import { history } from '../../../constants';
import actions from './actions/settings';


const styles = {
  inactive: {
    color: 'gray',
  },

  content: {
    fontFamily: 'Roboto, sans-serif',
    padding: '10px',
  },

  settings: {
    item: {
      cursor: 'pointer',
    },
  },
};


const mapStateToProps = (state) => ({
  settings: state.settings.settings,
  settingsOpen: state.settings.open,
});


const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    settings: React.PropTypes.node,
    settingsOpen: React.PropTypes.bool,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
    muiTheme: React.PropTypes.object.isRequired,
  },

  handleTouchTap(event) {
    const link = event.target.textContent;
    history.push(link);
  },

  handleHome() {
    history.push('/');
  },

  handleOpenSettings() {
    store.dispatch(actions.open(<Settings />));
  },

  handleCloseSettings() {
    store.dispatch(actions.close());
  },

  render() {
    const content = this.props.children ? this.props.children : <Landing />;
    const header = this.context.muiTheme.toolbar.height;
    const footer = this.context.muiTheme.footer.height;
    const headerFooter = header + footer;
    styles.content.height = `calc(100vh - ${headerFooter}px - 2 * ${styles.content.padding})`;
    const closeSettingsIcon = (
      <FontIcon className="material-icons" onTouchTap={this.handleCloseSettings}>
        close
      </FontIcon>
    );
    return (
      <div>
        <Drawer
          openSecondary
          open={this.props.settingsOpen}
        >
          <MenuItem
            primaryText="&nbsp;"
            style={styles.settings.item}
            rightIcon={closeSettingsIcon}
          />
          {this.props.settings}
        </Drawer>
        <Toolbar>
          <ToolbarGroup firstChild>
            <FontIcon className="material-icons" onTouchTap={this.handleHome}>
              home
            </FontIcon>
            <FlatButton
              label="clusters"
              primary={this.context.router.isActive('clusters')}
              style={this.context.router.isActive('clusters') ? undefined : styles.inactive}
              onTouchTap={this.handleTouchTap}
            />
            <FlatButton
              label="services"
              primary={this.context.router.isActive('services')}
              style={this.context.router.isActive('services') ? undefined : styles.inactive}
              onTouchTap={this.handleTouchTap}
            />
            <FlatButton
              label="provisions"
              primary={this.context.router.isActive('provisions')}
              style={this.context.router.isActive('provisions') ? undefined : styles.inactive}
              onTouchTap={this.handleTouchTap}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarSeparator />
            <FontIcon className="material-icons" onTouchTap={this.handleOpenSettings}>
              reorder
            </FontIcon>
          </ToolbarGroup>
        </Toolbar>
        <div style={styles.content}>
          {content}
        </div>
        <div style={this.context.muiTheme.footer}>
          Made by:
          <a href="http://tilda.center/" style={{ color: this.context.muiTheme.footer.a.color }}>
            Tilda Center
          </a>
        </div>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(Layout);
