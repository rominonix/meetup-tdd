import { render } from "@testing-library/react";
import { mount, configure, shallow } from 'enzyme';
import SingleEvent from "../components/SingleEvent/SingleEvent";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

describe("SINGLE EVENT - Tester for SingleEvent Component", () => {
  test("SINGLE EVENT - Test if SingleEvent Component render without errors", async () => {
    render(
      <SingleEvent
        closeModal={undefined}
        id={""}
        title={""}
        description={""}
        //@ts-ignore
        date={undefined}
        time={""}
        reviews={[]}
        digitalEvent={""}
        availableSeats={0}
        UserId={""}
        eventImg={""}
      />
    );
  });

  test("SINGLE EVENT - Test if className 'single-event' exist in SingleEvent component", async () => {
    const wrapper = mount(
      <SingleEvent
        closeModal={undefined}
        id={""}
        title={""}
        description={""}
        //@ts-ignore
        date={undefined}
        time={""}
        reviews={[]}
        digitalEvent={""}
        availableSeats={0}
        UserId={""}
        eventImg={""}
      />
    );
    expect(wrapper.find(".single-event").length).toEqual(1);
  });

  test("SINGLE EVENT - Test if p tag exist in SingleEvent component", async () => {
    const wrapper = mount(   <SingleEvent
      closeModal={undefined}
      id={""}
      title={""}
      description={""}
      //@ts-ignore
      date={undefined}
      time={""}
      reviews={[]}
      digitalEvent={""}
      availableSeats={0}
      UserId={""}
      eventImg={""}
    />);
    expect(wrapper.find("p").length).toEqual(5);
  });

  test("SINGLE EVENT - Test if p tag exist in SingleEvent component", async () => {
    const wrapper = shallow( <div className='message'>You comment are empty 😢!</div>);
    const div = wrapper.find("div")
    expect(div.text()).toBe('You comment are empty 😢!');
  });

});
