import React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

const props = { headerData: ['10%', '$100', '50%'] };

describe('Header', () => {
    let HeaderMount = mount(<Header headerData={props.headerData} />);

    props.headerData.map((item, index) => {
        it(`renders the header data content ${index}`, () => {
            expect(HeaderMount.find('.header-block.mod-data').at(index).text()).toEqual(props.headerData[index])
        })
    });
});