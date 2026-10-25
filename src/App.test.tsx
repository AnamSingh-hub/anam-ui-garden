import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the UI Garden heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /anam ui garden/i })
  ).toBeInTheDocument();
});   