/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import CreateClusterForm from '../../components/molecules/cluster/createForm';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FileInput from 'react-file-reader-input';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe("Create Cluster Form", () => {
  const setup = node => {
    const muiTheme = getMuiTheme();
    const context = {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    };
    return shallow(
      node,
      { ...context }
    );
  };

  const mountWithContext = (node) => {
    const muiTheme = getMuiTheme();
    return mount(node, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    });
  };
  const props = {
    dispatch: jest.fn(),
  };

  const result = setup(<CreateClusterForm {...props} />);
  const wrapper = mountWithContext(<CreateClusterForm {...props} />);

  it("Render one form", () => {
    expect(result.type()).to.equal('form');
  });

  it("Form handle submit", () => {
    const handleSubmit = sinon.spy();
    wrapper.node.handleSubmit = handleSubmit;
    wrapper.setState({ name: 'target' });
    wrapper.setState({ username: 'wex' });
    wrapper.setState({ sshKey: 'verySicret' });
    wrapper.simulate('submit');
    expect(handleSubmit.calledOnce).to.equal(true);
  });

  it("Handle on change username", () => {
    const NameTextFieldChild = wrapper.find(TextField).nodes[0];
    const event = {
      target: {
        value: 'target',
      },
    };
    NameTextFieldChild.props.onChange({ ...event });
    expect(wrapper.state().name).to.equal('target');
  });

  it("Handle on change name", () => {
    const UsernameTextFieldChild = wrapper.find(TextField).nodes[1];
    const event = {
      target: {
        value: 'wex',
      },
    };
    UsernameTextFieldChild.props.onChange({ ...event });
    expect(wrapper.state().username).to.eql('wex');
  });

  it("Test children", () => {
    const firstChild = result.node.props.children[0];
    expect(firstChild.type).to.equal('div');

    const secondChild = result.node.props.children[1];
    expect(secondChild.type).to.equal('div');

    const thirdChild = result.node.props.children[2];
    expect(thirdChild.type).to.equal('div');

    const fourthChild = result.node.props.children[3];
    expect(fourthChild.type).to.equal('div');
  });

  it("return TextField and RaisedButton", () => {
    const firstChild = result.node.props.children[0];
    const secondChild = result.node.props.children[1];
    const thirdChild = result.node.props.children[2];
    const fourthChild = result.node.props.children[3];

    const NameTextFieldChild = firstChild.props.children;
    expect(NameTextFieldChild.type).to.equal(TextField);
    expect(NameTextFieldChild.props.required).to.equal(true);
    expect(NameTextFieldChild.props.floatingLabelText).to.equal('Name');

    const UsernameTextFieldChild = secondChild.props.children;
    expect(UsernameTextFieldChild.type).to.equal(TextField);
    expect(UsernameTextFieldChild.props.required).to.equal(true);
    expect(UsernameTextFieldChild.props.floatingLabelText).to.equal('Username');

    const FileInputChild = thirdChild.props.children;
    expect(FileInputChild.type).to.equal(FileInput);
    expect(FileInputChild.props.id).to.equal('ssh');

    const RaisedButtonChild = fourthChild.props.children;
    expect(RaisedButtonChild.type).to.equal(RaisedButton);
    expect(RaisedButtonChild.props.label).to.equal('Create');
  });
});
