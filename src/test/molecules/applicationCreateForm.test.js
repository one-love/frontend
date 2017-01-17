/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CreateApplicationForm from '../../components/molecules/application/createForm';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe("Create Service form", () => {
  const setup = (node) => {
    const renderer = ReactTestUtils.createRenderer();
    const muiTheme = getMuiTheme();
    renderer.render(node, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    });
    return renderer.getRenderOutput();
  };

  const mountWithContext = (node) => {
    const muiTheme = getMuiTheme();
    return mount(node, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    });
  };

  const props = {
    serviceId: "808080",
  };
  const result = setup(<CreateApplicationForm { ...props } />);
  const wrapper = mountWithContext(<CreateApplicationForm { ...props } />);

  it("Render one form", () => {
    expect(result.type).to.equal('form');
  });

  it("Form handle submit", () => {
    const handleSubmit = sinon.spy();
    wrapper.node.handleSubmit = handleSubmit;
    wrapper.setState({ name: 'ngnix' });
    wrapper.simulate('submit');
    expect(handleSubmit.calledOnce).to.equal(true);
  });

  it("Handle on change name", () => {
    const TextFieldChild = wrapper.find(TextField).nodes[0];
    const event = {
      target: {
        value: 'Ngnix',
      },
    };
    TextFieldChild.props.onChange({ ...event });
    expect(wrapper.state().name).to.equal('Ngnix');
  });

  it("Handle on change galaxyRole", () => {
    const TextFieldChild = wrapper.find(TextField).nodes[1];
    const event = {
      target: {
        value: 'one-love/ngnix',
      },
    };
    TextFieldChild.props.onChange({ ...event });
    expect(wrapper.state().galaxyRole).to.equal('one-love/ngnix');
  });

  it("Test children", () => {
    const firstChild = result.props.children[0];
    expect(firstChild.type).to.equal('div');

    const secondChild = result.props.children[1];
    expect(secondChild.type).to.equal('div');
  });

  it("return TextField and RaisedButton", () => {
    const firstChild = result.props.children[0];
    const secondChild = result.props.children[1];
    const thirdChild = result.props.children[2];

    const HostnameTextFieldChild = firstChild.props.children;
    expect(HostnameTextFieldChild.type).to.equal(TextField);
    expect(HostnameTextFieldChild.props.required).to.equal(true);
    expect(HostnameTextFieldChild.props.floatingLabelText).to.equal('Name');

    const IPTextFieldChild = secondChild.props.children;
    expect(IPTextFieldChild.type).to.equal(TextField);
    expect(IPTextFieldChild.props.required).to.equal(true);
    expect(IPTextFieldChild.props.floatingLabelText).to.equal('Galaxy Role');

    const RaisedButtonChild = thirdChild.props.children;
    expect(RaisedButtonChild.type).to.equal(RaisedButton);
    expect(RaisedButtonChild.props.label).to.equal('Create');
  });
});
