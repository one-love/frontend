/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
/* eslint func-names: 0 */
/* eslint prefer-arrow-callback: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import { Service } from '../../components/molecules/service';
import Paper from 'material-ui/Paper';
import ServiceIcon from 'material-ui/svg-icons/action/build';
import styles from '../../components/atoms/icon/styles';


describe("Service", function () {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(
    <Service
      name="vagrant"
      serviceId="1337testId"
    />
  );
  const result = renderer.getRenderOutput();

  it("Service should be return paper element", function () {
    expect(result.type).to.equal(Paper);
    expect(result.props.style).to.equal(styles.paper);
  });

  it("First child", function () {
    const child = result.props.children[0];
    expect(child.type).to.equal('div');
    expect(child.props.children).to.equal('x');
    expect(child.props.style).to.equal(styles.close);
  });

  it("Second child", function () {
    const child = result.props.children[1];
    expect(child.type).to.equal(ServiceIcon);
    expect(child.props.style).to.equal(styles.icon);
    expect(child.props.color).to.equal(styles.icon.color);
  });

  it("Third child", function () {
    const child = result.props.children[2];
    expect(child.type).to.equal('div');
    expect(child.props.children).to.equal('vagrant');
  });
});
