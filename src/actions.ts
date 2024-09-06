"use server";

import { ModelsResponce, VehicleTypesResponce } from "./interfaces/interfaces";

export const fetchModels = async (makeId: number, year: number) => {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data: ModelsResponce = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch models: " + error);
    return Promise.reject(error);
  }
};

export const fetchMakes = async () => {
  try {
    const res = await fetch(
      `${process.env.API_ENDPOINT}/GetMakesForVehicleType/car?format=json`
    );
    const data: VehicleTypesResponce = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch makes slugs: " + error);
    return Promise.reject(error);
  }
};
