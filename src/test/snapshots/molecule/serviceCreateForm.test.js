/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import CreateServiceForm from '../../../components/molecules/service/createForm';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Create service form(snapshot)", () => {
  const props = {
    dispatch: jest.fn(),
  };
  const setup = () => shallow(<CreateServiceForm {...props} />);
  it("Create service form render form", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
