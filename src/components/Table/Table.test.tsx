import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("Table renders", () => {
  render(<Table>Test content</Table>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("Table supports disabled state", () => {
  render(<Table disabled>Disabled content</Table>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
