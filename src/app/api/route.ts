import { fetchMakes } from "@/actions";
import { VehicleTypesResponce } from "@/interfaces/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VehicleTypesResponce>
) {
  const data = await fetchMakes();
  res.status(200).json(data);
}
