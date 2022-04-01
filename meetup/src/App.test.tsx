import { render } from '@testing-library/react';
import App from './App';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import { mount, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })


describe("Tester for App Component", () => {
  test("APP - Test if App Component render without errors", async () => {
    render(<App />);
  });

  test("APP - Test if className 'App' ext", async () => {
    const wrapper = render(<App />);
    expect(wrapper.container.firstChild).toHaveClass('App');
  });

  test("APP - Test if Navigation Component renders into App Component initially", async () => {
    const wrapper = mount(<App />);
    const actual = wrapper.contains(<Navigation />);
    expect(actual).toBe(true);
  });
  test("APP - Test if Footer Component renders into App Component initially", async () => {
    const wrapper = mount(<App />);
    const actual = wrapper.contains(<Footer />);
    expect(actual).toBe(true);
  });
})
