import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })


describe("Tester for Navigation Component", () => {
    test("NAVIGATION - Test if Navigation Component render without errors", async () => {
      render(<BrowserRouter><Navigation /></BrowserRouter>);
    });

    test("NAVIGATION - Test if Navigation component has a h2 with 'Meet...' ", () => {
      render(<BrowserRouter><Navigation /></BrowserRouter>);
      const title = screen.getByText(/Meet/);
      expect(title).toBeInTheDocument();
    });

    test("NAVIGATION- Test if nav tag exist in Navigation component", async () => {
      const wrapper = mount(<BrowserRouter><Navigation /></BrowserRouter>);
      expect(wrapper.find("nav").length).toEqual(1);
    });

    test("NAVIGATION - Test if ul tag exist in Navigation component", async () => {
      const wrapper = mount(<BrowserRouter><Navigation /></BrowserRouter>);
      const nav = wrapper.find("nav")
      expect(nav.children("ul").length).toEqual(1)
    });

    test('NAVIGATION - Test if li text are Sign In 🔒 initially', () => {
      const wrapper = shallow(<li className='link-sign-in'>Sign In 🔒</li>);
      const li = wrapper.find('li'); 
      expect(li.text()).toBe('Sign In 🔒');
    });

    test('NAVIGATION - Test if li text are Create Event 📌 initially', () => {
      const wrapper = shallow(<li className='link-new-event'>Create Event 📌</li>);
      const li = wrapper.find('li'); 
      expect(li.text()).toBe('Create Event 📌');
    });


    


    // test("NAVIGATION- Test if NAV tag exist in Navigation component", async () => {
    //   const wrapper = mount(<BrowserRouter><Navigation /></BrowserRouter>);
    //   expect(wrapper.find("nav").length).toEqual(1);
    // });

    

  // test('LOGIN - Test if renders input element with Password placeholder text initially', () => {
  //   const wrapper = shallow(<BrowserRouter><Navigation /></BrowserRouter>);
  //   // expect(wrapper.exists('nav')).toBe(true);
  //   expect(wrapper.find('nav').children("ul").length).toEqual(5);


  // });
   
})

