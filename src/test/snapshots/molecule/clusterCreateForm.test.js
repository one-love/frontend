/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import CreateServiceForm from '../../../components/molecules/cluster/createForm';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe("Create cluster form(snapshot)", () => {
  const setup = () => {
    const muiTheme = getMuiTheme();
    const context = {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    };
    return shallow(<CreateServiceForm />, { ...context });
  };
  it("Create service form render form", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
