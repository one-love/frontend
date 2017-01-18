/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import CreateApplicationForm from '../../../components/molecules/application/createForm';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe("Create application form(snapshot)", () => {
  const setup = () => {
    const props = {
      serviceId: "808080",
    };

    const muiTheme = getMuiTheme();
    const context = {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    };
    return shallow(<CreateApplicationForm { ...props } />, { ...context });
  };
  it("Create application form render form", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
