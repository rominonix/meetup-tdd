import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../views/HomeScreen/Home";
import Hero from '../components/Hero/Hero'
import { mount, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("HOME SCREEN - Tester for HomeScreen Component", () => {
  test("HOME SCREEN - Test if HomeScreen Component render without errors", () => {
    render(<Home />);
  });

  test("HOME SCREEN - Test if Hero Component renders into HomeScreen View initially", () => {
    const wrapper = mount(<Home />);
    const actual = wrapper.contains(<Hero />);
    expect(actual).toBe(true);
  });

  test("HOME SCREEN - Test if className 'home' exist in SearchEvent component", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find(".home").length).toEqual(1);
  });
});
