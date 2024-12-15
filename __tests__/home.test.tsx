import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "@/pages";
// import debug from "debug";

describe("Home component", () => {
  test("About section still loading", () => {
    render(<About isLoading={true} />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  test("About section loaded", () => {
    render(<About isLoading={false} />);
    expect(screen.getByText(/🙏\s*Apologies/)).toBeInTheDocument();
  });
});
