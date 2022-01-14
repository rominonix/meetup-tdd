import React from "react";
import { render, screen } from "@testing-library/react";
import { mount, configure } from 'enzyme';
import Comment from "../components/Comment/Comment";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("COMMENT - Tester for Comment Component", () => {
  test("COMMENT - Test if Comment Component render without errors", () => {
    render(<Comment />);
  });

  test("COMMENT - Test if className 'comment' exist in Comment component", () => {
    const wrapper = mount(<Comment />);
    expect(wrapper.find(".comment").length).toEqual(1);
  });

  test("COMMENT - Test if button tag exist in Comment component", () => {
    const wrapper = mount(<Comment />);
    expect(wrapper.find("button").length).toEqual(1);
  });
});