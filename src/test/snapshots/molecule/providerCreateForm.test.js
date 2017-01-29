/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { CreateProviderForm } from '../../../components/molecules/provider/createForm';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe("Create provider form(snapshot)", () => {
  const setup = () => {
    const props = {
      cluster: {
        id: "2311231",
      },
      plugins: [
        {
          properties: [],
          type: "DO",
        },
        {
          properties: [
            {
              name: "name",
              type: "string",
            },
          ],
          type: "SSH",
        },
      ],
      dispatch: jest.fn(),
    };
    const muiTheme = getMuiTheme();
    const context = {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    };
    return shallow(<CreateProviderForm { ...props } />, { ...context });
  };
  it("Create provider form render form", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
