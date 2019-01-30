import React from 'react';
import Loader from './';
import { shallow } from 'enzyme';

import "../../../utils/enzymeSetup";

it('renders without crashing', () => {
	const component = shallow(<Loader />);

	expect(component).toMatchSnapshot();
});
