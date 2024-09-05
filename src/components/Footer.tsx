import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-base-300">
      <Container>
        <div className="footer footer-center text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              CarDealerApp
            </p>
          </aside>
        </div>
      </Container>
    </footer>
  );
};
