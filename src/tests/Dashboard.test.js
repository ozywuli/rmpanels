import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../components/Dashboard';

const props = {
    content: {
        "headerData": ["30%", "$2000000", "85%"],
        "contentA": "This should be displayed in Panel A. This is visible by default",
        "contentB": "This should be displayed in Panel B. This should be hidden by default"
    }    
};

describe('Dashboard', () => {
    let DashboardMount = mount(<Dashboard {...props} />);

    let initialActivePanelValue = DashboardMount.state().activePanel;

    it('PanelToggle exists', () => {
        expect(DashboardMount.find('PanelToggle').exists());
    });

    describe('click the panel toggle', () => {
        beforeEach(() => {
            DashboardMount.find('PanelToggle').simulate('click');
        });
    
        it('toggles the value of activePanel', () => {
            expect(DashboardMount.state().activePanel).not.toBe(initialActivePanelValue);
        });
    });
})