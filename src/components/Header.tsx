import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="bg-base-100">
      <Container>
        <div className="navbar">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <Link href="/" className="btn btn-ghost text-xl">
              <Image
                src="/logo.png"
                alt="CarDealerApp Logo"
                width={40}
                height={40}
              />
              CarDealerApp
            </Link>
          </div>

          <div className="navbar-end">
            <a className="btn">Back</a>
          </div>
        </div>
      </Container>
    </header>
  );
};
