import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("HeroImage renders", () => {
  render(<HeroImage>Test content</HeroImage>);
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("HeroImage supports disabled state", () => {
  render(<HeroImage disabled>Disabled content</HeroImage>);
  expect(screen.getByText("Disabled content")).toBeInTheDocument();
});
