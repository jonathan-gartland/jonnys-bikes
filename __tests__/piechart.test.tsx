import PieChart from "@/components/PieChart";
import React from "react";
import { render } from "@testing-library/react";

jest.mock("echarts", () => {
  const originalModule = jest.requireActual("echarts");
  return {
    ...originalModule,
    init: jest.fn(() => ({
      setOption: jest.fn(),
      resize: jest.fn(),
    })),
  };
});

describe("PieChart Component", () => {
  test("renders brand piechart", () => {
    const container = document.createElement("div");
    Object.defineProperty(container, "clientWidth", { value: 600 });
    Object.defineProperty(container, "clientHeight", { value: 400 });

    document.body.appendChild(container);

    render(
      <PieChart
        text={"Brand"}
        name={"Bikes by Brand"}
        divname={"brand"}
        queryname={"Brand"}
      />,
      { container }
    );

    expect(document.getElementById("brand")).toBeInTheDocument();
    expect(1).toBe(1);
  });
  test("renders material piechart", () => {
    const container = document.createElement("div");
    Object.defineProperty(container, "clientWidth", { value: 600 });
    Object.defineProperty(container, "clientHeight", { value: 400 });

    document.body.appendChild(container);

    render(
      <PieChart
        text={"Material"}
        name={"Material"}
        queryname={"material"}
        divname={"material"}
      />,
      { container }
    );

    expect(document.getElementById("material")).toBeInTheDocument();
    expect(1).toBe(1);
  });
  test("renders manufacture country piechart", () => {
    const container = document.createElement("div");
    Object.defineProperty(container, "clientWidth", { value: 600 });
    Object.defineProperty(container, "clientHeight", { value: 400 });

    document.body.appendChild(container);

    render(
      <PieChart
        text={"Manufacture Country"}
        name={"Bikes by Manufacture Country"}
        divname={"man_country"}
        queryname={"manufacture country"}
      />,
      { container }
    );

    expect(document.getElementById("man_country")).toBeInTheDocument();
    expect(1).toBe(1);
  });

  test("renders type piechart", () => {
    const container = document.createElement("div");
    Object.defineProperty(container, "clientWidth", { value: 600 });
    Object.defineProperty(container, "clientHeight", { value: 400 });

    document.body.appendChild(container);

    render(
      <PieChart
        text={"Type"}
        name={"Bikes by Type"}
        divname={"type"}
        queryname={"type"}
      />,
      { container }
    );

    expect(document.getElementById("type")).toBeInTheDocument();
    expect(1).toBe(1);
  });
});
