import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

test("TableRow renders", () => {
  render(<TableRow>Test content</TableRow>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("TableRow supports disabled state", () => {
  render(<TableRow disabled>Disabled content</TableRow>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
