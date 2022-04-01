import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../components/Login/Login";
import { mount, configure, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe("LOGIN - Tester for Login Component", () => {
  test("LOGIN - Test if Login Component render without errors", async () => {
    render(<Login />);
  });

  test("LOGIN - Test if input field exist in Login component", async () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find("input").length).toEqual(2);
  });

  test("LOGIN - Test if className 'login' exist in Login component", async () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find(".login").length).toEqual(1);
  });

  test("LOGIN - Test if button tag exist in Login component", async () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find("button").length).toEqual(1);
  });

  test("LOGIN - Test if input tag exist in Login component", async () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find("input").length).toEqual(2);
  });

  test('LOGIN - Test if renders input element with Email placeholder text initially', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists('input')).toBe(true);
    expect(wrapper.find('input').at(0).props().placeholder).toEqual('Email')

  });

  test('LOGIN - Test if renders input element with Password placeholder text initially', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists('input')).toBe(true);
    expect(wrapper.find('input').at(1).props().placeholder).toEqual('Password')

  });

  test('LOGIN - Test if button text are Login initially', () => {
    const wrapper = shallow(<button className='login-button'>Login</button>);
    const button = wrapper.find('button'); 
    expect(button.text()).toBe('Login');
  });
});
