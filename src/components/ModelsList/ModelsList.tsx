import { FC } from "react";
import { ModelsResponce } from "@/interfaces/interfaces";
import { ModelItem } from "./ModelItem";
import Link from "next/link";

export const ModelsList: FC<{ models: ModelsResponce }> = ({ models }) => {
  return (
    <div className="grid grid-cols-auto-fill gap-4 my-12">
      {models.Results ? (
        models?.Results?.map((model) => (
          <ModelItem key={model.Model_ID} model={model} />
        ))
      ) : (
        <div className="toast toast-center toast-middle">
          <div className="alert alert-warning">
            <span>Models not found.</span>
          </div>
          <Link href="/" className="btn rounded-xl">
            Back
          </Link>
        </div>
      )}
    </div>
  );
};
