import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

test("Dropdown renders", () => {
  render(<Dropdown>Test content</Dropdown>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("Dropdown supports disabled state", () => {
  render(<Dropdown disabled>Disabled content</Dropdown>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
