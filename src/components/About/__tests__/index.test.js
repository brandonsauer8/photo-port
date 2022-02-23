import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';



describe('About component', () => {
    //first test
    it('renders', () => {
        render(<About />);
    });

    //second test
    it('matchces snapshot DOM node structure', () => {
        //about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

afterEach(cleanup);