import React, { FC, useEffect } from "react";
import * as echarts from "echarts";

interface BikeProps {
  name: string;
  text: string;
  divname: string;
  queryname: string;
  subtext?: string;
}

const bikes = [
  {
    Model: "Backwoods",
    Brand: "GT",
    type: "mtb",
    year: 1994,
    material: "aluminum",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Grade",
    Brand: "GT",
    type: "gravel",
    year: 2016,
    material: "carbon",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Timberline",
    Brand: "GT",
    type: "mtb",
    year: 1996,
    material: "steel",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Grade",
    Brand: "GT",
    type: "gravel",
    year: 2018,
    material: "carbon",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Corsa 2.0",
    Brand: "GT",
    type: "road",
    year: 2013,
    material: "steel",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Chameleon",
    Brand: "Santa Cruz",
    type: "mtb",
    year: 2018,
    material: "aluminum",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Chameleon",
    Brand: "Santa Cruz",
    type: "mtb",
    year: 2022,
    material: "aluminum",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Hightower",
    Brand: "Santa Cruz",
    type: "mtb",
    year: 2022,
    material: "aluminum",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Hoo Koo e Koo",
    Brand: "Gary Fisher",
    type: "mtb",
    year: 1998,
    material: "steel",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Hoo Koo e Koo",
    Brand: "Gary Fisher",
    type: "mtb",
    year: 1998,
    material: "steel",
    "frame only": 0,
    "manufacture country": "TW",
  },
  {
    Model: "Paragon",
    Brand: "Gary Fisher",
    type: "mtb",
    year: 1996,
    material: "aluminum",
    "frame only": 0,
    "manufacture country": "US",
  },
  {
    Model: "Verailles",
    Brand: "Lemond",
    type: "road",
    year: 2006,
    material: "steel/carbon",
    "frame only": 0,
    "manufacture country": "US",
  },
  {
    Model: "Arrivee",
    Brand: "Lemond",
    type: "road",
    year: 2003,
    material: "titanium",
    "frame only": 0,
    "manufacture country": "US",
  },
  {
    Model: "Big Sur",
    Brand: "Gary Fisher",
    type: "mtb",
    year: 2002,
    material: "aluminum",
    "frame only": 1,
    "manufacture country": "US",
  },
  {
    Model: "Supercaliber",
    Brand: "Gary Fisher",
    type: "mtb",
    year: 1996,
    material: "carbon",
    "frame only": 1,
    "manufacture country": "US",
  },
  {
    Model: "Unknown",
    Brand: "Unknown",
    type: "fixed",
    year: 2010,
    material: "steel",
    "frame only": 0,
    "manufacture country": "CN",
  },
];

const PieChart: FC<BikeProps> = ({
  text,
  name,
  divname,
  queryname,
  subtext,
}: BikeProps) => {
  useEffect(() => {
    const chartDom = document.getElementById(divname)!;
    const myChart = echarts.init(chartDom);
    const data = bikes.reduce((acc: { [key: string]: number }, bike) => {
      const key = bike[queryname as keyof typeof bike] as string;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));

    const option: echarts.EChartsOption = {
      title: {
        text,
        subtext: subtext !== undefined ? subtext : "",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name,
          type: "pie",
          radius: "40%",
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }, [text, name, divname, queryname, subtext]);

  return (
    <div
      id={divname}
      className="flex items-center justify-center"
      style={{ width: "450px", height: "300px" }}
    ></div>
  );
};

export default PieChart;
