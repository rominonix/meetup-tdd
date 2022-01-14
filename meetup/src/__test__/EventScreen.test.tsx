import React from "react";
import { render, screen } from "@testing-library/react";
import EventScreen from '../views/EventScreen/EventsScreen';
import { mount, configure } from 'enzyme';
import EventList from "../components/EventList/EventList";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("EVENT SCREEN - Tester for EventScreen Component", () => {
  test("EVENT SCREEN - Test if EventScreen Component render without errors", () => {
    render(<EventScreen />);
  });

  // test("EVENT SCREEN - Test if EvenList Component renders into EventScreen view initially", () => {
  //   const wrapper = mount(<EventScreen />);
  //   const actual = wrapper.contains(<EventList />);
  //   expect(actual).toBe(true);
  // });

  test("EVENT SCREEN - Test if className 'event-screen' exist in EventScreen component", () => {
    const wrapper = mount(<EventScreen />);
    expect(wrapper.find(".event-screen").length).toEqual(1);
  });
});
