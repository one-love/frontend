import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Layout from '../../layouts/layout';
import Add from '../../atoms/add';
import './list.scss';


export default function List(props) {
  const transitionTime = 300;
  return (
    <Layout
      title={props.title}
      cluster={props.cluster}
      service={props.service}
      provision={props.provision}
    >
      <ReactCSSTransitionGroup
        transitionName="list"
        transitionAppear
        transitionAppearTimeout={transitionTime}
        transitionEnterTimeout={transitionTime}
        transitionLeaveTimeout={transitionTime}
      >
        {props.children}
      </ReactCSSTransitionGroup>
      <Add />
    </Layout>
  );
}


List.propTypes = {
  children: React.PropTypes.node,
  cluster: React.PropTypes.string,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};
