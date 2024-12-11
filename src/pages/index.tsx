import Image from "next/image";
import React, { useState, FC, useEffect } from "react";
import PieChart from "@/components/PieChart";
import JonnyBike from "@/components/JonnyBike";

interface AboutProps {
  isLoading: boolean;
}

const About: FC<AboutProps> = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div className="spinner-container flex flex-col space-y-1.5">
          <div className="spinner"></div>
          <div className="text-2xl text-gray-700">Loading ...</div>
        </div>
      ) : (
        <div className="mx-auto text-left">
          <TextView />
        </div>
      )}
    </div>
  );
};

const TextView: React.FC = () => {
  return (
    <div className="component-width mx-auto mt-10">
      <div className="mt-5 space-y-4 rounded-2xl border-2 border-gray-500 bg-blue-100 p-10 text-lg">
        <div className="mb-10 text-3xl">
          <h1>
            Delayed Loading component, and a brief description of the
            infographic SPA
          </h1>
        </div>
        <div>
          <p>
            {"🙏"} Apologies for the loading delay for this component when
            opening the view, I added the loading prop so I would have a
            component to write a test against for the loading state(s).
            Otherwise this simple text would load immediately and not steal
            three seconds of your time.
          </p>
          <br />
          <p>
            The &#34;Jonny&#39;s Bikes&#34; SPA was originally built as a full
            NextJS, Django Rest Framework, and PostgreSQL app. Why such
            firepower for a data set of 14+/- bikes?
          </p>
          <br />
          <p> I had three primary goals in mind.</p>
          <br />
          <p>
            First to practice with Django as the back end rest framework using
            an existing PostgreSQL database, in order to keep my python testing
            skills up to speed.
          </p>
          <br />
          <p>
            Second, utilize the echarts {"📈"} module to create some interesting
            visual components that could be integrated into a React App, which
            leads into the third goal.
          </p>
          <p>
            Practice React development to get stronger with testing, deployment,
            automation, etc... of React and React Native apps.
          </p>
          <br />
          <p>
            This example has been stripped down and simplified so it doesn&#39;t
            depend on an api, router, or a backend server running somewhere
            accessible. The detail in the database has been collected into a
            list of simple json objects and I refactored the charts and table to
            use the list instead of the rest API.
          </p>
          <br />
          <p>
            {"🚲"} My bicycle stable, collection, hoard... is a nice simple
            dataset to use for a fun SPA. Technically a few are family bikes,
            but I take care of and maintain them.
          </p>
          <p>
            Any other relevant detail will be on the github repository page.
          </p>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="mx-4">
        <div className="responsive mt-4 h-64 w-full rounded-2xl pt-4">
          <Image
            className="h-64 w-full rounded-2xl object-cover object-center filter"
            src="/jonnys-bikes/p6pb24703805.jpg"
            alt="Gary Fisher Hoo Koo e Koo 1998"
            width={700}
            height={256}
          />
          <h1 className="px-26 absolute left-[120px] top-4 text-[196px] text-blue-100">
            Jonny&#39;s Bikes
          </h1>
        </div>

        <div className="col mt-6 justify-center rounded-2xl border-2 border-gray-500 bg-blue-100 text-center">
          <div className="pt-8">
            <div className="pb-4 text-4xl">
              Bikes collected over the past 30 years
            </div>
            <div className="pb-8 text-2xl">
              Built with NextJS and Apache ECharts
            </div>
          </div>
        </div>
        <div className="responsive mt-4 h-64 w-full rounded-2xl pt-4">
          <Image
            className="h-64 w-full rounded-2xl object-cover object-center"
            src="/jonnys-bikes/GTTimberlineFS1996.jpg"
            alt="GT Timberline FS 1996"
            width={700}
            height={475}
          />
        </div>
      </div>
      <About isLoading={isLoading} />
      <div>
        <Image
          className="h-64 w-full rounded-lg object-cover object-center"
          src="/jonnys-bikes/2022-Santa-Cruz-Chameleon-Review_12.jpg"
          alt="Santa Cruz Chameleon 2022"
          width={700}
          height={475}
        />
      </div>
      <div className="col component-width relative mt-10 justify-center space-y-5 rounded-xl border-2 border-gray-500 bg-blue-100">
        <div className="mx-48 mb-8 mt-4 mt-8 pb-4 text-4xl">
          Some mildly interesting ECharts breakdowns of the collection
        </div>
        <div className="col mx-36">
          <div className="row space-x-60">
            <div>
              <PieChart
                text={"Brand"}
                name={"Bikes by Brand"}
                divname={"brand"}
                queryname={"Brand"}
              />
            </div>
            <div>
              <PieChart
                text={"Manufacture Country"}
                name={"Bikes by Manufacture Country"}
                divname={"man_country"}
                queryname={"manufacture country"}
              />
            </div>
          </div>
          <div className="row space-x-60">
            <div>
              <PieChart
                text={"Type"}
                name={"Bikes by Type"}
                divname={"type"}
                queryname={"type"}
              />
            </div>
            <div>
              <PieChart
                text={"Material"}
                name={"Material"}
                queryname={"material"}
                divname={"material"}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="justify-center">
          <JonnyBike />
        </div>
        <Image
          className="h-64 w-full rounded-2xl object-cover object-center"
          src="/jonnys-bikes/ac6150e5-b610-4d3d-86af-1af027005b52.png"
          alt="GT Grade 2018"
          width={700}
          height={475}
        />
      </div>
    </div>
  );
}
