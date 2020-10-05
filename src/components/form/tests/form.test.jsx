import React from 'react'; 
import Form from '../form'
import { shallow } from 'enzyme'

describe('<Form />', () => {
    let wrapper;
    let instance;

    const props = {
        text: 'Initial text',
        handleInputChange: jest.fn(),
        handleSubmit: jest.fn()
    }

    beforeEach(() => {
        wrapper = shallow(<Form { ...props }/>);
        instance = wrapper.instance();
    });

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render h1', () => {
        
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});