import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landing page link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Landing page/i);
  expect(linkElement).toBeInTheDocument();
});
