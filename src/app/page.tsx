"use client";

import { Container } from "@/components/Container";
import { VehicleTypesResponce } from "@/types/types";
import { years } from "@/utils/utils";
import clsx from "clsx";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<VehicleTypesResponce | null>(null);
  const [carMakeId, setCarMake] = useState<string>();
  const [modelYear, setModelYear] = useState<string>();

  useEffect(() => {
    const fetchVehicleType = async () => {
      try {
        const res = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    };
    fetchVehicleType();
  }, []);

  const handleCarMakeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCarMake(e.target.value);
  };
  const handleModelYearChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setModelYear(e.target.value);

  return (
    <section className="min-h-screen mx-3 my-12">
      <Container>
        <h1 className="text-4xl font-bold capitalize">Car Dealer App</h1>
        <p className="mt-4 max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet
          placeat est error. Laudantium animi impedit nisi blanditiis facere
          accusamus ex non laboriosam sed eveniet odio dolor ea, debitis maxime?
        </p>
        <form className="join mt-8">
          <select
            value={carMakeId}
            onChange={handleCarMakeChange}
            className="select select-bordered join-item capitalize"
          >
            <option value="">vehicle type</option>
            {data &&
              data.Results?.map((el) => (
                <option value={el.MakeId} key={el.MakeId}>
                  {el.MakeName}
                </option>
              ))}
          </select>

          <select
            value={modelYear}
            onChange={handleModelYearChange}
            className="select select-bordered join-item capitalize"
          >
            <option value="">model year</option>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>

          <Link
            href={`/result/${carMakeId}/${modelYear}`}
            className={clsx(
              "btn join-item",
              !carMakeId || !modelYear ? "btn-disabled" : ""
            )}
          >
            Search
          </Link>
        </form>
      </Container>
    </section>
  );
};

export default HomePage;
