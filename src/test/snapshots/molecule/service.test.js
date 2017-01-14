/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { Service } from '../../../components/molecules/service';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Service Molecule (snapshot)", () => {
  const setup = () => {
    const props = {
      name: "vagrant",
      serviceId: "1337testId",
      confirm: jest.fn(),
    };
    return shallow(<Service {...props} />);
  };

  it("Service molecule render paper", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
