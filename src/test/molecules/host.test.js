/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import { Host } from '../../components/molecules/host';
import Paper from 'material-ui/Paper';
import HostIcon from 'material-ui/svg-icons/hardware/memory';
import styles from '../../components/atoms/icon/styles';


describe("Molecule Cluster", () => {
  const setup = () => {
    const renderer = ReactTestUtils.createRenderer();
    const props = {
      name: "DO",
      clusterId: "1231231212123",
      providerName: "DigitalOcean",
      confirm: jest.fn(),
    };

    renderer.render(
      <Host {...props} />
    );

    return renderer.getRenderOutput();
  };

  const result = setup();

  it("Host return paper element", () => {
    expect(result.type).to.equal(Paper);
    expect(result.props.style).to.equal(styles.paper);
  });

  it("Testing children of host", () => {
    const firstChild = result.props.children[0];
    expect(firstChild.type).to.equal('div');
    expect(firstChild.props.children).to.equal('x');
    expect(firstChild.props.style).to.equal(styles.close);

    const secondChild = result.props.children[1];
    expect(secondChild.type).to.equal(HostIcon);
    expect(secondChild.props.style).to.equal(styles.icon);
    expect(secondChild.props.color).to.equal(styles.icon.color);

    const thirdChild = result.props.children[2];
    expect(thirdChild.type).to.equal('div');
    expect(thirdChild.props.children).to.equal('DO');
  });
});
