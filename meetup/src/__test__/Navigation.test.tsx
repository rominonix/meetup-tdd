import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })


describe("Tester for Navigation Component", () => {
    test("NAVIGATION - Test if Navigation Component render without errors", () => {
      render(<BrowserRouter><Navigation /></BrowserRouter>);
    });
   
})

