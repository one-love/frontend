/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CreateProviderForm } from '../../components/molecules/provider/createForm';
/* import TextField from 'material-ui/TextField';*/
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SelectField from 'material-ui/SelectField';
injectTapEventPlugin();

describe("Create Provider form", () => {
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
    cluster: {
      id: "2311231",
    },
    plugins: [
      {
        properties: [],
        type: "DO",
      },
      {
        properties: [
          {
            name: "name",
            type: "string",
          },
        ],
        type: "SSH",
      },
    ],
    dispatch: jest.fn(),
  };
  const result = setup(<CreateProviderForm { ...props } />);
  const wrapper = mountWithContext(<CreateProviderForm { ...props } />);

  it("Render one form", () => {
    expect(result.type).to.equal('form');
  });

  it("Form handle submit", () => {
    const handleSubmit = sinon.spy();
    wrapper.node.handleSubmit = handleSubmit;
    wrapper.setState({ type: "DO" });
    wrapper.simulate('submit');
    expect(handleSubmit.calledOnce).to.equal(true);
  });

  it("Test children", () => {
    const firstChild = result.props.children[0];
    expect(firstChild.type).to.equal('h2');

    const secondChild = result.props.children[1];
    expect(secondChild.type).to.equal(SelectField);
    expect(secondChild.props.hintText).to.equal('Select Provider Type');

    const thirdChild = result.props.children[3];
    expect(thirdChild.type).to.equal('div');
  });

  it("return SelectField and RaisedButton", () => {
    const firstChild = result.props.children[0];
    const thirdChild = result.props.children[3];

    const H2Child = firstChild.props.children;
    expect(H2Child).to.equal('Create Provider');

    const RaisedButtonChild = thirdChild.props.children;
    expect(RaisedButtonChild.type).to.equal(RaisedButton);
    expect(RaisedButtonChild.props.label).to.equal('Create');
  });
});
