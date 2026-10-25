import { render, screen } from "@testing-library/react";
import { Img } from "./Img";

test("Img renders", () => {
  render(<Img>Test content</Img>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("Img supports disabled state", () => {
  render(<Img disabled>Disabled content</Img>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
