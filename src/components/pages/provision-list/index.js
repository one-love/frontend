import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import provisionDetail from '../provision';
import styles from './styles.js';
import actions from './actions';
import radium from 'radium';


const mapStateToProps = state => ({
  provisions: state.provisionList.provisions,
  status: state.provisionList.status,
});


const ProvisionList = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    provisions: React.PropTypes.array,
    status: React.PropTypes.string,
    get: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      provisions: [],
    };
  },

  componentWillMount() {
    this.props.get();
  },

  componentWillUnmount() {
    this.props.reset();
  },

  render() {
    return (
      <div style={styles.provision}>
        <h1>Provisions</h1>
        {
          this.props.provisions.map(provision =>
            <div key={provision.id}>
              <Link
                key={provision.id}
                to={`/provisions/${provision.id}/`}
                style={styles[provision.status]}
              > {provision.id} </Link>
            </div>
          )
        }
      </div>
    );
  },
});

const routes = {
  path: 'provisions',
  indexRoute: {
    component: connect(mapStateToProps, actions)(
      radium(ProvisionList)
    ),
  },
  childRoutes: [
    provisionDetail,
  ],
};

export default routes;
