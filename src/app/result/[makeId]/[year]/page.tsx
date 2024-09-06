import { ModelsResponce } from "@/interfaces/interfaces";
import { Container } from "@/components/Container";
import { FC, Suspense } from "react";
import { Loader } from "@/components/Loader";
import { ModelsList } from "@/components/ModelsList/ModelsList";
import { fetchMakes, fetchModels } from "@/actions";

export const generateStaticParams = async () => {
  try {
    const data = await fetchMakes();

    if (!data || data.Results.length === 0) {
      return [];
    }

    return data.Results.map((make) => ({
      makeId: String(make.MakeId),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
};

const ResultPage: FC<{
  params: {
    makeId: number;
    year: number;
  };
}> = async ({ params }) => {
  const { makeId, year } = params;
  const models: ModelsResponce = await fetchModels(makeId, year);

  return (
    <section className="min-h-screen-sized my-12">
      <Container>
        <Suspense fallback={<Loader />}>
          <ModelsList models={models} />
        </Suspense>
      </Container>
    </section>
  );
};

export default ResultPage;
