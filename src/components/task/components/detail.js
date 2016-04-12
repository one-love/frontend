import React from 'react';
import actions from '../actions/detail';
import store from '../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const data = {
    task: state.taskDetail.task,
  };
  return data;
};

const Component = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
    task: React.PropTypes.object,
  },

  componentWillMount() {
    store.dispatch(actions.get(this.props.params.taskId));
  },

  shouldComponentUpdate(nextProps) {
    if (this.props.task !== nextProps.task) {
      return true;
    }
    return false;
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },
  render() {
    if (this.props.task === undefined) {
      return <div></div>;
    }
    const index = (
      <div>
        <h4>{this.props.task.status}</h4>
      </div>
    );
    return index;
  },
});

export const Detail = connect(mapStateToProps, actions)(Component);

const routes = {
  indexRoute: { component: Detail },
  path: ':taskId',
};

export default routes;
