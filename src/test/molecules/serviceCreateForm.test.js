/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import CreateServiceForm from '../../components/molecules/service/createForm';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

describe(" Create Service form", () => {
  const setup = () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(
      <CreateServiceForm />
    );
    return renderer.getRenderOutput();
  };

  const result = setup();
  it("Render one TextField", () => {
    expect(result.type).to.equal('form');
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
