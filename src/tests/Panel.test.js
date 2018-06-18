import React from 'react';
import { mount } from 'enzyme';
import Panel from '../components/Panel';

const props = { 
    id: 0,
    activePanel: 0,
    panelContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam et alias, vitae suscipit laboriosam provident aliquid porro, sunt impedit necessitatibus cupiditate tempora quos nisi magnam quidem? Id sunt dolorem cupiditate.'
};

describe('Panel', () => {
    let PanelMount = mount(<Panel {...props} />);

    it('renders the panel content', () => {
        expect(PanelMount.text()).toEqual(props.panelContent);
    });
});