import { Suspense } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Loader } from "@/components/Loader";
import { FilterForm } from "@/components/FilterForm";
import { fetchMakes } from "@/actions";

const HomePage = async () => {
  const data = await fetchMakes();

  return (
    <section className="min-h-screen-sized md:h-screen-sized relative mx-3 my-12">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 h-full lg:gap-12">
          <div className="lg:flex-1">
            <h1 className="text-4xl font-bold capitalize">Car Dealer App</h1>
            <p className="mt-4 max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              eveniet placeat est error. Laudantium animi impedit nisi
              blanditiis facere accusamus ex non laboriosam sed eveniet odio
              dolor ea, debitis maxime?
            </p>
            <Suspense fallback={<Loader />}>
              <FilterForm makes={data} />
            </Suspense>
          </div>
          <div className="lg:flex-1 relative h-52 md:h-60 lg:h-96 w-full">
            <Suspense fallback={<Loader />}>
              <Image
                src="/hero-img.svg"
                alt="lorem lorem lorem"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
