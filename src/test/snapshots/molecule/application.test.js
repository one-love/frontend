/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { Application } from '../../../components/molecules/application';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Application Molecule (snapshot)", () => {
  const setup = () => {
    const props = {
      name: "ngnix",
      serviceId: "808080",
      confirm: jest.fn(),
    };

    return shallow(<Application {...props} />);
  };

  it("Applcation molecule render paper", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
