import React from "react";
import { render, screen } from "@testing-library/react";
import LoginScreen from '../views/LoginScreen/LoginScreen';
import Login from "../components/Login/Login";
import { mount, configure } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

describe("LOGIN SCREEN - Tester for LoginScreen Component", () => {
  test("LOGIN SCREEN - Test if LoginScreen Component render without errors", () => {
    render(<LoginScreen />);
  });

  test("LOGIN SCREEN - Test if Login Component renders into LoginScreen View initially", () => {
    const wrapper = mount(<LoginScreen />);
    const actual = wrapper.contains(<Login />);
    expect(actual).toBe(true);
  });

  test("LOGIN SCREEN - Test if Login Component has a h1 with 'Sign in' ", () => {
    render(<LoginScreen />);
    const title = screen.getByText(/Sign/);
    expect(title).toBeInTheDocument();
  });

  test("LOGIN SCREEN - Test if className 'login-screen' exist in SearchEvent component", () => {
    const wrapper = mount(<LoginScreen />);
    expect(wrapper.find(".login-screen").length).toEqual(1);
  });
});
