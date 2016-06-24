import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from './actions/list';
import store from '../../store';
import detail from './components/detail';

const mapStateToProps = state => ({
  provisions: state.provisionList.provisions,
  status: state.provisionList.status,
});

const ProvisionList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    provisions: React.PropTypes.array,
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
    if (this.props.provisions === undefined) {
      return <div></div>;
    }
    const index = (
      <div>
        <h2>My provisions:</h2>
        <ul>
          {
            this.props.provisions.map(
              provision =>
                <li key={provision.id}>
                  <Link
                    key={provision.id}
                    to={`/provisions/${provision.id}/`}
                  > {provision.id} </Link>
                </li>
            )
          }
        </ul>
      </div>
    );
    if (this.props.children) { return children; }
    return index;
  },
});


const routes = {
  path: 'provisions',
  indexRoute: { component: connect(mapStateToProps, actions)(ProvisionList) },
  childRoutes: [
    detail,
  ],
};

export default routes;
