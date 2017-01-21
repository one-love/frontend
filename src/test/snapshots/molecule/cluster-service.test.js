/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
/* eslint no-sequences: 0 */
/* eslint quotes: 0 */

import React from 'react';
import { ClusterService } from '../../../components/molecules/cluster-service';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("ClusterService Molecule (snapshot)", () => {
  const setup = () => {
    const props = {
      name: "wordpress",
      serviceId: "808080",
      clusterId: "12121122",
      confirm: jest.fn(),
    };
    return shallow(<ClusterService {...props} />);
  };

  it("ClusterService molecule render paper", () => {
    const component = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
