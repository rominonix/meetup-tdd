import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero/Hero";
import { mount, configure } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

describe("HERO - Tester for Hero Component", () => {
  test("HERO - Test if Hero Component render without errors", () => {
    render(<Hero />);
  });

  test("HERO - Test if Hero Component has a h1 with 'What do you...' ", () => {
    render(<Hero />);
    const title = screen.getByText(/What/);
    expect(title).toBeInTheDocument();
  });

  test("HERO - Test if className 'hero' exist in Hero component", () => {
    const wrapper = mount(<Hero />);
    expect(wrapper.find(".hero").length).toEqual(1);
  });

  test("HERO - Test if className 'hero-emoji' exist in Hero component", () => {
    const wrapper = mount(<Hero />);
    expect(wrapper.find(".hero-emoji").length).toEqual(1);
  });

  test("HERO - Test if H1 exist in Hero component", () => {
    const wrapper = mount(<Hero />);
    expect(wrapper.find("h1").length).toEqual(2);
  });
});
