import React from "react";
import { render, screen } from "@testing-library/react";
import { mount, configure } from 'enzyme';
import SingleEvent from "../components/SingleEvent/SingleEvent";
import Comment from "../components/Comment/Comment";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("SINGLE EVENT - Tester for SingleEvent Component", () => {
  test("SINGLE EVENT - Test if SingleEvent Component render without errors", () => {
    render(<SingleEvent closeModal={undefined} />);
  });

  test("SINGLE EVENT - Test if Comment Component renders into SingleEvent view initially", () => {
    const wrapper = mount(<SingleEvent closeModal={undefined} />);
    const actual = wrapper.contains(<Comment />);
    expect(actual).toBe(true);
  });

  test("SINGLE EVENT - Test if className 'single-event' exist in SingleEvent component", () => {
    const wrapper = mount(<SingleEvent closeModal={undefined} />);
    expect(wrapper.find(".single-event").length).toEqual(1);
  });
});