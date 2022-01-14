import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../components/Login/Login";
import { mount, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("LOGIN - Tester for Login Component", () => {
  test("LOGIN - Test if Login Component render without errors", () => {
    render(<Login />);
  });

  test("LOGIN - Test if input field exist in Login component", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find("input").length).toEqual(2);
  });

  test("LOGIN - Test if className 'login' exist in Login component", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find(".login").length).toEqual(1);
  });

  test("LOGIN - Test if button tag exist in Login component", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find("button").length).toEqual(1);
  });
});
