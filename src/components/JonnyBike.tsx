import React from "react";
import Image from "next/image";

function JonnyBike() {
  const bikes = [
    {
      model: "Backwoods",
      brand: "GT",
      type: "mtb",
      year: 1994,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Grade",
      brand: "GT",
      type: "gravel",
      year: 2016,
      material: "carbon",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Timberline",
      brand: "GT",
      type: "mtb",
      year: 1996,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Grade",
      brand: "GT",
      type: "gravel",
      year: 2018,
      material: "carbon",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Corsa 2.0",
      brand: "GT",
      type: "road",
      year: 2013,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Chameleon",
      brand: "Santa Cruz",
      type: "mtb",
      year: 2018,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Chameleon",
      brand: "Santa Cruz",
      type: "mtb",
      year: 2022,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Hightower",
      brand: "Santa Cruz",
      type: "mtb",
      year: 2022,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Hoo Koo e Koo",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1998,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Hoo Koo e Koo",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1998,
      material: "steel",
      "frame only": 0,
      "manufacture country": "TW",
    },
    {
      model: "Paragon",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1996,
      material: "aluminum",
      "frame only": 0,
      "manufacture country": "US",
    },
    {
      model: "Verailles",
      brand: "Lemond",
      type: "road",
      year: 2006,
      material: "steel/carbon",
      "frame only": 0,
      "manufacture country": "US",
    },
    {
      model: "Arrivee",
      brand: "Lemond",
      type: "road",
      year: 2003,
      material: "titanium",
      "frame only": 0,
      "manufacture country": "US",
    },
    {
      model: "Big Sur",
      brand: "Gary Fisher",
      type: "mtb",
      year: 2002,
      material: "aluminum",
      "frame only": 1,
      "manufacture country": "US",
    },
    {
      model: "Supercaliber",
      brand: "Gary Fisher",
      type: "mtb",
      year: 1996,
      material: "carbon",
      "frame only": 1,
      "manufacture country": "US",
    },
    {
      model: "Unknown",
      brand: "Unknown",
      type: "fixed",
      year: 2010,
      material: "steel",
      "frame only": 0,
      "manufacture country": "CN",
    },
  ];

  return (
    <div>
      <div className="pb-10">
        <div className="component-width mx-2 relative mb-4 mt-6 w-4/5 justify-center rounded-xl border-2 border-gray-500 bg-blue-100 px-16 pb-4 pt-4 text-3xl">
          Bikes Ready to Ride or Within a Quick Tune Up of Being Rideable...
          Plus 2 Frames
        </div>
        <div className="mx-8">
          <Image
            className="h-64 w-full rounded-lg object-cover object-center"
            src="/jonnys-bikes/image0.jpg"
            alt="GT Grade 2018"
            width={700}
            height={475}
          />
        </div>
        <div className="mx-4">
          <table className="component-width mx-6 mt-4 w-4/5 min-w-64 divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-600">
              <tr>
                {/*<th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-gray-200">*/}
                {/*  id*/}
                {/*</th>*/}
                <th className="text-lcenter px-4 py-3 font-bold uppercase tracking-wider text-gray-200">
                  brand
                </th>
                <th className="px-8 py-3 text-center font-bold uppercase tracking-wider text-gray-200">
                  model
                </th>
                <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-gray-200">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-gray-200">
                  Year
                </th>
                <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-gray-200">
                  Age
                </th>
                <th className="px-4 py-3 text-center font-bold uppercase tracking-tighter text-gray-200">
                  Manufactured
                </th>
                <th className="px-4 py-3 text-left font-bold uppercase tracking-wider text-gray-200">
                  Material
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {bikes.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}
                >
                  {/*<td className="whitespace-nowrap px-4 py-4 text-left">*/}
                  {/*  <span className="text-blue-gray-700 font-normal">*/}
                  {/*    {index + 1}*/}
                  {/*  </span>*/}
                  {/*</td>*/}
                  <td className="whitespace-nowrap px-4 py-4 text-center">
                    <span className="text-blue-gray-700 font-normal">
                      {item.brand}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-8 py-4 text-center">
                    <span className="text-blue-gray-700 font-normal">
                      {item.model}
                      {item["frame only"] === 1 && " (Frame)"}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left">
                    <span className="text-blue-gray-700 font-normal">
                      {item.type}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left">
                    <span className="text-blue-gray-700 font-normal">
                      {item.year}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left">
                    <span className="text-blue-gray-700 font-normal">
                      {2024 - item.year}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-center">
                    <span className="text-blue-gray-700 font-normal">
                      {item["manufacture country"]}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left">
                    <span className="text-blue-gray-700 font-normal">
                      {item.material}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JonnyBike;
