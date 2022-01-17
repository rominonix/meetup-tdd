import React from "react";
import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList/EventList";
import { mount, configure } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("EVENT LIST - Tester for EventList Component", () => {
  test("EVENT LIST - Test if EventList Component render without errors", () => {
    render(<EventList id={""} title={""} description={""} date={""} time={""} eventImg={""}  />);
  });

  test("EVENT LIST - Test if className 'event-list' exist in EventList component", () => {
    const wrapper = mount(<EventList id={""} title={""} description={""} date={""} time={""} eventImg={""}  />);
    expect(wrapper.find(".event-list").length).toEqual(1);
  });

  test("EVENT LIST - Test if className 'img-thumbnail' exist in EventList component", () => {
    const wrapper = mount(<EventList id={""} title={""} description={""} date={""} time={""} eventImg={""}  />);
    expect(wrapper.find(".img-thumbnail").length).toEqual(1);
  });
});