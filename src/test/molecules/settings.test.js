/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */
import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import Settings from '../../components/molecules/settings';
import MenuItem from 'material-ui/MenuItem';
import LogoutIcon from 'material-ui/svg-icons/action/input';

describe("Settings Molecule", () => {
  const setup = (node) => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(
      node, {
        router: {},
      },
    );

    return renderer.getRenderOutput();
  };

  const styles = {
    cursor: 'pointer',
  };

  const result = setup(<Settings />);

  it("Settings return menu item", () => {
    expect(result.type).to.equal(MenuItem);
  });

  it("Settings props", () => {
    expect(result.props.primaryText).to.equal('Logout');
    expect(result.props.leftIcon.type).to.equal(LogoutIcon);
    expect(result.props.style).to.eql(styles);
  });
});
