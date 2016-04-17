import React from 'react';
import actions from '../actions/detail';
import store from '../../../store';
import { connect } from 'react-redux';
import { socketio } from '../../../constants';

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
    status: React.PropTypes.string,
  },
  componentWillMount() {
    const self = this;
    store.dispatch(actions.get(self.props.params.taskId));
  },

  componentDidMount() {
    socketio.on('task', message => {
      const task = this.props.task;
      if (task && task.id === message.id) {
        switch (message.status) {
          case 'SUCCESS':
            store.dispatch(actions.success(message));
            break;
          case 'FAILED':
            store.dispatch(actions.fail(message));
            break;
          default:
            store.dispatch(actions.fail('unexpected error on task'));
            break;
        }
      }
    });
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
