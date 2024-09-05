import { ModelsResponce, VehicleTypesResponce } from "@/types/types";
import { Container } from "@/components/Container";
import { FC } from "react";

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
  );
  const data: VehicleTypesResponce = await res.json();

  return data.Results.map((make) => ({
    makeId: String(make.MakeId),
  }));
};

const ResultPage: FC<{
  params: {
    makeId: number;
    year: number;
  };
}> = async ({ params }) => {
  const { makeId, year } = params;

  const fetchModels = async () => {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await res.json();
    return data;
  };

  const models: ModelsResponce = await fetchModels();

  return (
    <div className="min-h-screen">
      <Container>
        <div className="grid grid-cols-auto-fill gap-4 my-12">
          {models &&
            models?.Results.map((model) => (
              <div key={model.Model_ID} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{`${model.Make_Name} ${model.Model_Name}`}</h2>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default ResultPage;
