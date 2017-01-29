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
/* import TextField from 'material-ui/TextField';
 * import RaisedButton from 'material-ui/RaisedButton';*/
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
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

  /* it("Form handle submit", () => {
   *   const handleSubmit = sinon.spy();
   *   wrapper.node.handleSubmit = handleSubmit;
   *   wrapper.simulate('submit');
   *   expect(handleSubmit.calledOnce).to.equal(true);
   * });*/

  /* it("Handle on change hostname", () => {
   *   const TextFieldChild = wrapper.find(TextField).nodes[0];
   *   const event = {
   *     target: {
   *       value: 'DO',
   *     },
   *   };
   *   TextFieldChild.props.onChange({ ...event });
   *   expect(wrapper.state().hostname).to.equal('DO');
   * });

   * it("Handle on change ip", () => {
   *   const TextFieldChild = wrapper.find(TextField).nodes[1];
   *   const event = {
   *     target: {
   *       value: '127.0.0.1',
   *     },
   *   };
   *   TextFieldChild.props.onChange({ ...event });
   *   expect(wrapper.state().ip).to.equal('127.0.0.1');
   * });

   * it("Test children", () => {
   *   const firstChild = result.props.children[0];
   *   expect(firstChild.type).to.equal('div');

   *   const secondChild = result.props.children[1];
   *   expect(secondChild.type).to.equal('div');
   * });

   * it("return TextField and RaisedButton", () => {
   *   const firstChild = result.props.children[0];
   *   const secondChild = result.props.children[1];
   *   const thirdChild = result.props.children[2];

   *   const HostnameTextFieldChild = firstChild.props.children;
   *   expect(HostnameTextFieldChild.type).to.equal(TextField);
   *   expect(HostnameTextFieldChild.props.required).to.equal(true);
   *   expect(HostnameTextFieldChild.props.autoFocus).to.equal(true);
   *   expect(HostnameTextFieldChild.props.floatingLabelText).to.equal('Hostname');

   *   const IPTextFieldChild = secondChild.props.children;
   *   expect(IPTextFieldChild.type).to.equal(TextField);
   *   expect(IPTextFieldChild.props.required).to.equal(true);
   *   expect(IPTextFieldChild.props.floatingLabelText).to.equal('IP');

   *   const RaisedButtonChild = thirdChild.props.children;
   *   expect(RaisedButtonChild.type).to.equal(RaisedButton);
   *   expect(RaisedButtonChild.props.label).to.equal('Create');
   * });*/
});
