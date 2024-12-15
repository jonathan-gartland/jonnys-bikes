import React from "react";
import { render, screen } from "@testing-library/react";
import Home, { About } from "@/pages";

describe("Home component", () => {
  test("About section still loading", () => {
    render(<About isLoading={true} />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  test("About section loaded", () => {
    render(<About isLoading={false} />);
    expect(screen.getByText(/🙏\s*Apologies/)).toBeInTheDocument();
  });

  // test("Piecharts loaded", () => {
  //   render(<Home />);
  //   const canvasElement = screen.getAllByRole("img");
  //   // const canvasElements = document.querySelectorAll(/canvas/i);
  //   expect(canvasElements.length).toBeGreaterThan(0);
  // });
});
