import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cssModules from 'react-css-modules';
import store from '../../../store';
import styles from './sidebar.scss';
import actions from './actions';


const Sidebar = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    show: React.PropTypes.bool,
  },

  hideSettings() {
    store.dispatch(actions.showSidebar(false));
  },

  render() {
    let timeout = 300;
    let animationType = 'ease-out';
    if (this.props.className && this.props.className.endsWith('__full')) {
      timeout = 1000;
      animationType = 'ease-in-out';
    }
    const timeoutSeconds = timeout / 1000.0;
    const style = {
      transition: `width ${timeoutSeconds}s ${animationType}`,
    };
    const styleName = this.props.show ? 'sidebar' : 'sidebar__closed';
    return (
      <ReactCSSTransitionGroup
        transitionName="sidebar"
        transitionAppear
        transitionAppearTimeout={10}
        transitionEnterTimeout={timeout}
        transitionLeaveTimeout={timeout}
      >
        <div styleName={styleName} style={style}>
          {this.props.children}
        </div>
      </ReactCSSTransitionGroup>
    );
  },
});


export default cssModules(Sidebar, styles);
