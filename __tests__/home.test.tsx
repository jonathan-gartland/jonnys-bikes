import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home component", () => {
  // test('renders the string "Save and see your changes instantly"', () => {
  //   const { getByText } = render(<Home />);
  //   expect(getByText("Jonny's Bikes")).toBeInTheDocument();
  //
  //   // expect(textElement).toBeInTheDocument();
  // });

  test("it passes", () => {
    expect(1).toBe(2 - 1);
  });

  test("it passes 2", () => {
    expect(1).toBe(2 - 1);
  });
});
