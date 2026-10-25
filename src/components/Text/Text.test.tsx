import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("Text renders", () => {
  render(<Text>Test content</Text>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("Text supports disabled state", () => {
  render(<Text disabled>Disabled content</Text>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
