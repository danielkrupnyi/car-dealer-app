"use client";

import { VehicleTypesResponce } from "@/interfaces/interfaces";
import { years } from "@/utils/utils";
import clsx from "clsx";
import Link from "next/link";
import { ChangeEvent, FC, useState } from "react";

export const FilterForm: FC<{ makes: VehicleTypesResponce }> = ({ makes }) => {
  const [carMakeId, setCarMake] = useState<string>();
  const [modelYear, setModelYear] = useState<string>();

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
          !makes || !makes?.Results ? "select-disabled" : ""
        )}
      >
        <option value="">vehicle type</option>
        {makes?.Results?.map((el) => (
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
          !makes || !makes?.Results ? "select-disabled" : ""
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
