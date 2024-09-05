import { Container } from "@/components/Container";
import Link from "next/link";

const HomePage = async () => {
  return (
    <section className="min-h-screen mx-3 my-12">
      <Container>
        <h1 className="text-4xl font-bold capitalize">Car Dealer App</h1>
        <p className="mt-4 max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet
          placeat est error. Laudantium animi impedit nisi blanditiis facere
          accusamus ex non laboriosam sed eveniet odio dolor ea, debitis maxime?
        </p>
        <div className="join mt-8">
          <select className="select select-bordered join-item capitalize">
            <option disabled selected>
              car type
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select className="select select-bordered join-item capitalize">
            <option disabled selected>
              model year
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <Link href="/result" className="btn btn-disabled join-item">
            Search
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
