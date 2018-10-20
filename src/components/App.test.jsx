import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('The app component', () => {
    it('should match snapshot', () => {
        const tree = shallow(<App />);
        expect(tree).toMatchSnapshot();
    });

    it('should display the headerContent prop as expected', () => {
        const mockHeaderContent = 'Awesome sauce';
        const wrapper = shallow(<App headerContent={mockHeaderContent} />);

        expect(wrapper.find('h1').text()).toEqual(mockHeaderContent);
    });
});
