/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import CreateHostForm from '../../../components/molecules/host/createForm';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe("Create host form(snapshot)", () => {
  const setup = () => {
    const props = {
      clusterId: "1231231212123",
      providerName: "DigitalOcean",
      dispatch: jest.fn(),
    };

    const muiTheme = getMuiTheme();
    const context = {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    };
    return shallow(<CreateHostForm { ...props } />, { ...context });
  };
  it("Create host form render form", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
