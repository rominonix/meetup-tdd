import React from "react";
import { render, screen } from "@testing-library/react";
import SearchEvent from "../components/SearchEvent/SearchEvent";

import { mount, configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("SEARCH EVENT - Tester for SearchEvent Component", () => {
  test("SEARCH EVENT - Test if SearchEvent Component render without errors", () => {
    render(<SearchEvent />);
  });

  test("SEARCH EVENT - Test if input field exist in SearchEvent component", () => {
    const wrapper = mount(<SearchEvent />);
    expect(wrapper.find("input").length).toEqual(3);
  });

  test("SEARCH EVENT - Test if button tag exist in SearchEvent component", () => {
    const wrapper = mount(<SearchEvent />);
    expect(wrapper.find("button").length).toEqual(1);
  });

  test("SEARCH EVENT - Test if className 'search-event' exist in SearchEvent component", () => {
    const wrapper = mount(<SearchEvent />);
    expect(wrapper.find(".search-event").length).toEqual(1);
  });
});
