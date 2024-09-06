import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="bg-base-100">
      <Container>
        <div className="navbar flex justify-center">
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
      </Container>
    </header>
  );
};
