import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
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
    location: React.PropTypes.object.isRequired,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
    muiTheme: React.PropTypes.object.isRequired,
  },

  handleClustersTouchTap() {
    history.push('/clusters/');
  },

  handleServicesTouchTap() {
    history.push('/services/');
  },

  handleProvisionsTouchTap() {
    history.push('/provisions/');
  },

  handleHomeTouchTap() {
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
    const homeActive = this.props.location.pathname === '/';
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
            <FlatButton
              icon={<HomeIcon />}
              primary={homeActive}
              style={homeActive ? undefined : styles.inactive}
              onClick={this.handleHomeTouchTap}
            />
            <FlatButton
              label="clusters"
              primary={this.context.router.isActive('clusters')}
              style={this.context.router.isActive('clusters') ? undefined : styles.inactive}
              onClick={this.handleClustersTouchTap}
            />
            <FlatButton
              label="services"
              primary={this.context.router.isActive('services')}
              style={this.context.router.isActive('services') ? undefined : styles.inactive}
              onTouchTap={this.handleServicesTouchTap}
            />
            <FlatButton
              label="provisions"
              primary={this.context.router.isActive('provisions')}
              style={this.context.router.isActive('provisions') ? undefined : styles.inactive}
              onTouchTap={this.handleProvisionsTouchTap}
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


/* eslint-disable new-cap */
const LayoutDND = DragDropContext(HTML5Backend)(Layout);
/* eslint-enable */
export default connect(mapStateToProps, actions)(LayoutDND);
