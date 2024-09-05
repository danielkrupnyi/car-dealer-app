"use client";

import { Container } from "@/components/Container";
import { VehicleTypesResponce } from "@/types/types";
import { years } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<VehicleTypesResponce | null>(null);
  const [carMake, setCarMake] = useState(null);
  const [modelYear, setModelYear] = useState(null);

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
          <select className="select select-bordered join-item capitalize">
            <option disabled selected>
              vehicle type
            </option>
            {data ? (
              data.Results?.map((el) => (
                <option value={el.MakeName} key={el.MakeId}>
                  {el.MakeName}
                </option>
              ))
            ) : (
              <option disabled>vehicle types not found</option>
            )}
          </select>

          <select className="select select-bordered join-item capitalize">
            <option disabled selected>
              model year
            </option>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <Link
            href="/result/makeId/year"
            className="btn btn-disabled join-item"
          >
            Search
          </Link>
        </form>
      </Container>
    </section>
  );
};

export default HomePage;
