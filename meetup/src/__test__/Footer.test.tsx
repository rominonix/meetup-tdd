import Footer from '../components/Footer/Footer'
import {render, screen} from '@testing-library/react'
import { mount, configure } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

describe("FOOTER - Tester for Footer Component", () => {
    test('FOOTER - Test if Footer Component render without errors', () => {
        render(<Footer />);
      });

      test("FOOTER - Test if Footer Component has a h2 with 'Have a nice...' ", () => {
        render(<Footer />);
        const title = screen.getByText(/Have/);
        expect(title).toBeInTheDocument();
      });
    
      test("FOOTER - Test if className 'footer' exist in Footer component", () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.find(".footer").length).toEqual(1);
      });
    
      test("FOOTER - Test if H2 exist in Footer component", () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.find("h2").length).toEqual(1);
      });
    });
