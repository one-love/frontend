import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cssModules from 'react-css-modules';
import Header from '../../molecules/header';
import Footer from '../../atoms/footer';
import Notification from '../../atoms/notification';
import styles from './notification.scss';


function NotificationLayout(props) {
  const transitionTime = 200;
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="notification"
        transitionAppear
        transitionAppearTimeout={transitionTime}
        transitionEnterTimeout={transitionTime}
        transitionLeaveTimeout={transitionTime}
      >
        <Notification transitionTime={transitionTime} />
      </ReactCSSTransitionGroup>
      <Header
        cluster={props.cluster}
        service={props.service}
        provision={props.provision}
        notification
      />
      <div styleName="content">
        <h1>{props.title ? props.title : 'Title'}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


NotificationLayout.propTypes = {
  cluster: React.PropTypes.string,
  children: React.PropTypes.node,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};


export default cssModules(NotificationLayout, styles);
