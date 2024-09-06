import { FC } from "react";
import { ModelsResultResponce } from "@/interfaces/interfaces";

export const ModelItem: FC<{ model: ModelsResultResponce }> = ({ model }) => {
  return (
    <div key={model.Model_ID} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{`${model.Make_Name} ${model.Model_Name}`}</h2>
      </div>
    </div>
  );
};
