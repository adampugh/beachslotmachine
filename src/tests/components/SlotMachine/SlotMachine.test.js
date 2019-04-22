import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';

import SlotMachine from '../../../components/SlotMachine/SlotMachine';

describe("<SlotMachine />", () => {
    it("should match snapshot", () => {
        const wheel = ['red', 'blue', 'green', 'yellow']
        const wrapper = shallow(<SlotMachine wheel={wheel}/>);
        expect(wrapper).toMatchSnapshot();
    });
});