/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import { Cluster } from '../../components/molecules/cluster';
import Paper from 'material-ui/Paper';
import ClusterIcon from 'material-ui/svg-icons/file/cloud-queue';
import styles from '../../components/atoms/icon/styles';


describe("Molecule Cluster", () => {
  const setup = () => {
    const renderer = ReactTestUtils.createRenderer();
    const props = {
      cluster: {
        name: "wordpress",
      },
      confirm: jest.fn(),
    };

    renderer.render(
      <Cluster {...props} />
    );

    return renderer.getRenderOutput();
  };

  const result = setup();

  it("Cluster return paper element", () => {
    expect(result.type).to.equal(Paper);
    expect(result.props.style).to.equal(styles.paper);
  });

  it("Testing children of cluster", () => {
    const firstChild = result.props.children[0];
    expect(firstChild.type).to.equal('div');
    expect(firstChild.props.children).to.equal('x');
    expect(firstChild.props.style).to.equal(styles.close);

    const secondChild = result.props.children[1];
    expect(secondChild.type).to.equal(ClusterIcon);
    expect(secondChild.props.style).to.equal(styles.icon);
    expect(secondChild.props.color).to.equal(styles.icon.color);

    const thirdChild = result.props.children[2];
    expect(thirdChild.type).to.equal('div');
    expect(thirdChild.props.children).to.equal('wordpress');
  });
});
