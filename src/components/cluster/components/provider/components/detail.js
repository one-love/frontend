import React from 'react';
import InlineEdit from 'react-edit-inline';
import { connect } from 'react-redux';
import actions from '../actions/detail';
import editActions from '../actions/edit';
import store from '../../../../../store';
import { Link } from 'react-router';
import edit from './edit';
import remove from './remove';
import host from './host';


const mapStateToProps = state => {
  const data = {
    provider: state.providerDetail.provider,
    applications: state.providerDetail.applications,
    roles: state.providerDetail.roles,
  };
  if (state.providerEdit.provider) {
    data.provider = state.providerEdit.provider;
  }
  return data;
};


const ProviderDetail = React.createClass({
  propTypes: {
    provider: React.PropTypes.object,
    applications: React.PropTypes.array,
    roles: React.PropTypes.array,
    params: React.PropTypes.object,

  },

  componentWillMount() {
    store.dispatch(actions.get(
      this.props.params.clusterId,
      this.props.params.providerName
    ));
  },

  componentWillUnmount() {
    store.dispatch(actions.reset());
    store.dispatch(editActions.reset());
  },

  dataChanged(data) {
    store.dispatch(
      editActions.edit(
        this.props.params.clusterId,
        this.props.params.providerName,
        data
      ),
    );
  },

  render() {
    const clusterId = this.props.params.clusterId;
    if (this.props.provider === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Provider {this.props.provider.name}</h2>
          <ul className="item__list">
            <li className="item__heading">
              Name:
              <InlineEdit
                text={this.props.provider.name}
                change={this.dataChanged}
                paramName="name"
              />
            </li>
            <li className="item__child">
              <Link to={
                `/clusters/${clusterId}/providers/${this.props.provider.name}/hosts/`
                }
              >
                Hosts
              </Link>
            </li>
          </ul>
        <Link to={`/clusters/${clusterId}/providers/${this.props.provider.name}/edit/`}>
          Edit
        </Link>
        <Link to={`/clusters/${clusterId}/providers/${this.props.provider.name}/remove/`}>
          Remove
        </Link>
      </div>
    );
  },
});


const routes = {
  path: ':providerName',
  indexRoute: { component: connect(mapStateToProps, actions)(ProviderDetail) },
  childRoutes: [
    edit,
    host,
    remove,
  ],
};

export default routes;
