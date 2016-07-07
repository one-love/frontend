import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from '../../../store';
import styles from './provision-list.scss';
import actions from './actions';


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

  getDefaultProps() {
    return {
      provisions: [],
    };
  },

  componentWillMount() {
    store.dispatch(actions.get());
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
  },

  render() {
    return (
      <div styleName="provision">
        <h1>Provisions</h1>
        {
          this.props.provisions.map(
            provision =>
              <dev key={provision.id} styleName={provision.status}>
                <Link
                  key={provision.id}
                  to={`/provisions/${provision.id}/`}
                > {provision.id} </Link>
              </dev>
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
      cssModules(ProvisionList, styles)
    ),
  },
};

export default routes;
