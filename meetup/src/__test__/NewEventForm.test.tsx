import React from "react";
import { render, screen } from "@testing-library/react";
import { mount, configure } from 'enzyme';
import NewEventForm from "../views/NewEventForm/NewEventForm";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("NEW EVENT FORM - Tester for NewEventForm Component", () => {
  test("NEW EVENT FORM - Test if NewEventForm Component render without errors", () => {
    render(<NewEventForm />);
  });

  test("NEW EVENT FORM - Test if input field exist in NewEventForm component", () => {
    const wrapper = mount(<NewEventForm />);
    expect(wrapper.find("input").length).toEqual(7);
  });

  test("NEW EVENT FORM - Test if select tag exist in NewEventForm component", () => {
    const wrapper = mount(<NewEventForm />);
    expect(wrapper.find("select").length).toEqual(1);
  });

  test("NEW EVENT FORM - Test if button tag exist in NewEventForm component", () => {
    const wrapper = mount(<NewEventForm />);
    expect(wrapper.find("button").length).toEqual(1);
  });

  test("NEW EVENT FORM - Test if textarea field exist in NewEventForm component", () => {
    const wrapper = mount(<NewEventForm/>);
    expect(wrapper.find("textarea").length).toEqual(1);
  });

  test("NEW EVENT FORM - Test if className 'event-form' exist in NewEventForm component", () => {
    const wrapper = mount(<NewEventForm/>);
    expect(wrapper.find(".event-form").length).toEqual(2);
  });
});