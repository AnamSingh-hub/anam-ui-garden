import { render, screen } from "@testing-library/react";
import { TableFooter } from "./TableFooter";

test("TableFooter renders", () => {
  render(<TableFooter>Test content</TableFooter>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("TableFooter supports disabled state", () => {
  render(<TableFooter disabled>Disabled content</TableFooter>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
