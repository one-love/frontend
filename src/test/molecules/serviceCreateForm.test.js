/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CreateServiceForm from '../../components/molecules/service/createForm';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe("Create Service form", () => {
  const setup = node => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(
      node
    );
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
    dispatch: jest.fn(),
  };
  const result = setup(<CreateServiceForm {...props} />);
  const wrapper = mountWithContext(<CreateServiceForm {...props} />);

  it("Render one form", () => {
    expect(result.type).to.equal('form');
  });

  it("Form handle submit", () => {
    const handleSubmit = sinon.spy();
    wrapper.node.handleSubmit = handleSubmit;
    wrapper.setState({ name: 'TotalBrutal' });
    wrapper.simulate('submit');
    expect(handleSubmit.calledOnce).to.equal(true);
  });

  it("Handle on change text", () => {
    const TextFieldChild = wrapper.find(TextField);
    const event = {
      target: {
        value: 'wordpress',
      },
    };
    TextFieldChild.node.props.onChange({ ...event });
    expect(wrapper.state()).to.eql({ name: 'wordpress' });
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

    const TextFieldChild = firstChild.props.children;
    expect(TextFieldChild.type).to.equal(TextField);
    expect(TextFieldChild.props.required).to.equal(true);
    expect(TextFieldChild.props.autoFocus).to.equal(true);
    expect(TextFieldChild.props.floatingLabelText).to.equal('Name');

    const RaisedButtonChild = secondChild.props.children;
    expect(RaisedButtonChild.type).to.equal(RaisedButton);
    expect(RaisedButtonChild.props.label).to.equal('Create');
  });
});
