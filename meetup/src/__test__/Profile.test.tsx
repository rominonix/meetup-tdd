import React from "react";
import { render, screen } from "@testing-library/react";
import { mount, configure } from 'enzyme';
import Profile from '../components/Profile/Profile'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("PROFILE - Tester for Profile Component", () => {
  test("PROFILE - Test if Profile Component render without errors", () => {
    render(<Profile />);
  });

  test("PROFILE - Test if className 'profile' exist in Comment component", () => {
    const wrapper = mount(<Profile />);
    expect(wrapper.find(".profile").length).toEqual(1);
  });

  test("PROFILE - Test if button tag exist in Profile component", () => {
    const wrapper = mount(<Profile />);
    expect(wrapper.find("button").length).toEqual(1);
  });
});