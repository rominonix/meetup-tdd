import Footer from '../components/Footer/Footer'
import {render, screen} from '@testing-library/react'

describe("FOOTER - Tester for Footer Component", () => {
    test('FOOTER - Test if Footer Component render without errors', () => {
        render(<Footer />);
        // const linkElement = screen.getByText(/Footer/i);
        // expect(linkElement).toBeInTheDocument();
      });
    });
