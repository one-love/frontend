/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import Settings from '../../../components/molecules/settings';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Service Molecule (snapshot)", () => {
  const setup = () => shallow(<Settings />, { router: {} });

  it("Settings snapshot", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
