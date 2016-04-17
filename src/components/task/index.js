import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';
import detail from './components/detail';

const mapStateToProps = state => ({
  tasks: state.taskList.tasks,
  status: state.taskList.status,
});

const Component = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    tasks: React.PropTypes.array,
    status: React.PropTypes.string,
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    const children = (
      <div>
        {this.props.children}
      </div>
    );
    if (this.props.tasks === undefined) {
      return <div></div>;
    }
    const index = (
      <div>
        <h2>My Task:</h2>
        <ul>
          {
            this.props.tasks.map(
              task =>
              <li key={task.id}>
              <Link
                key={task.id}
                to={`/tasks/${task.id}/`}
              > {task.id} </Link> </li>
            )
          }
        </ul>
      </div>
    );
    if (this.props.children) {return children;}
    return index;
  },
});

export const List = connect(mapStateToProps, actions)(Component);

const routes = {
  path: 'tasks',
  indexRoute: { component: List },
  childRoutes: [
    detail,
  ],
};

export default routes;
