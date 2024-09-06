"use client";

import { VehicleTypesResponce } from "@/interfaces/interfaces";
import { years } from "@/utils/utils";
import clsx from "clsx";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

export const FilterForm = () => {
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

  const handleCarMakeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setCarMake(e.target.value);
  const handleModelYearChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setModelYear(e.target.value);

  return (
    <form className="join join-vertical w-full lg:join-horizontal mt-8">
      <select
        value={carMakeId}
        onChange={handleCarMakeChange}
        className={clsx(
          "select select-bordered join-item capitalize",
          !data || !data?.Results ? "select-disabled" : ""
        )}
      >
        <option value="">vehicle type</option>
        {data?.Results?.map((el) => (
          <option value={el.MakeId} key={el.MakeId}>
            {el.MakeName}
          </option>
        ))}
      </select>

      <select
        value={modelYear}
        onChange={handleModelYearChange}
        className={clsx(
          "select select-bordered join-item capitalize",
          !data || !data?.Results ? "select-disabled" : ""
        )}
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
  );
};
