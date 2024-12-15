import React from "react";
import { render, screen } from "@testing-library/react";
import JonnyBike from "@/components/JonnyBike";
import Home from "@/pages";

describe("JonnyBike Component", () => {
  test("renders the component and verifies the image is visible", () => {
    const { getByAltText } = render(<JonnyBike />);
    const image = getByAltText("GT Grade 2018");
    expect(image).toBeVisible();
  });

  test("Should be 5 Gary Fisher bikes/frames", () => {
    render(<JonnyBike />);
    const gfBikes = screen.getAllByText(/Gary Fisher/i);
    expect(gfBikes.length).toEqual(5);
  });

  test("Should be 5 GT bikes/frames", () => {
    render(<JonnyBike />);
    const gtBikes = screen.getAllByText(/GT/i);
    expect(gtBikes.length).toEqual(5);
  });

  test("Should be 5 GT bikes/frames", () => {
    render(<JonnyBike />);
    const mtbBikes = screen.getAllByText(/mtb/i);
    expect(mtbBikes.length).toEqual(10);
  });
});
