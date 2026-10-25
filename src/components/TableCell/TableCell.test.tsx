import { render, screen } from "@testing-library/react";
import { TableCell } from "./TableCell";

test("TableCell renders", () => {
  render(<TableCell>Test content</TableCell>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("TableCell supports disabled state", () => {
  render(<TableCell disabled>Disabled content</TableCell>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
