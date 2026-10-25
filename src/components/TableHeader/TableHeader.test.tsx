import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

test("TableHeader renders", () => {
  render(<TableHeader>Test content</TableHeader>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("TableHeader supports disabled state", () => {
  render(<TableHeader disabled>Disabled content</TableHeader>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
