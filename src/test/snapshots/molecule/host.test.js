/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { Host } from '../../../components/molecules/host';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Host Molecule (snapshot)", () => {
  const setup = () => {
    const props = {
      name: "DO",
      clusterId: "1231231212123",
      providerName: "DigitalOcean",
      confirm: jest.fn(),
    };

    return shallow(<Host {...props} />);
  };

  it("Host molecule render paper", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
