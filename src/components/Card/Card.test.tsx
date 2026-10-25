import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("Card renders", () => {
  render(<Card>Test content</Card>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("Card supports disabled state", () => {
  render(<Card disabled>Disabled content</Card>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
