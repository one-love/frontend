import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cssModules from 'react-css-modules';
import store from '../../../store';
import styles from './sidebar.scss';
import actions from './actions';


function mapStateToProps(state) {
  return {
    content: state.sidebar.content,
    show: state.sidebar.show,
  };
}


const Popup = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    content: React.PropTypes.node,
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
    let content;
    if (this.props.show) {
      content = (
        <div styleName={this.props.className} style={style}>
          <div styleName="disable" onClick={this.hideSettings}>x</div>
          <div>
            {this.props.content}
          </div>
        </div>
      );
    }
    return (
      <ReactCSSTransitionGroup
        transitionName="sidebar"
        transitionAppear
        transitionAppearTimeout={10}
        transitionEnterTimeout={timeout}
        transitionLeaveTimeout={timeout}
      >
        {content}
      </ReactCSSTransitionGroup>
    );
  },
});


export default connect(mapStateToProps, actions)(cssModules(Popup, styles));
