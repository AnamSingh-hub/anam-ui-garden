import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("Label renders", () => {
  render(<Label>Test content</Label>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("Label supports disabled state", () => {
  render(<Label disabled>Disabled content</Label>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
