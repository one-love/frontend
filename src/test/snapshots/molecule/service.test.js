/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { Service } from '../../../components/molecules/service';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Service Molecule (snapshot)", () => {
  it("Service molecule render paper", () => {
    const component = shallow(
      <Service
        name="vagrant"
        serviceId="1337testId"
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
