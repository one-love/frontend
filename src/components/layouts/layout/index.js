import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ReorderIcon from 'material-ui/svg-icons/action/reorder';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
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
      <FlatButton
        icon={<CloseIcon />}
        onClick={this.handleCloseSettings}
      />
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
          <ToolbarGroup lastChild>
            <ToolbarSeparator />
            <FlatButton
              icon={<ReorderIcon />}
              onClick={this.handleOpenSettings}
              style={{ color: 'gray' }}
            />
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
        <Snackbar open message="some message" autoHideDuration={3000} action="close" />
      </div>
    );
  },
});


/* eslint-disable new-cap */
const LayoutDND = DragDropContext(HTML5Backend)(Layout);
/* eslint-enable */
export default connect(mapStateToProps, actions)(LayoutDND);
