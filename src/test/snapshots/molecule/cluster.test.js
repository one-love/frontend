/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { Cluster } from '../../../components/molecules/cluster';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Cluster Molecule (snapshot)", () => {
  const setup = () => {
    const props = {
      cluster: {
        name: "wordpress",
      },
      confirm: jest.fn(),
    };
    return shallow(<Cluster {...props} />);
  };

  it("Cluster molecule render paper", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
