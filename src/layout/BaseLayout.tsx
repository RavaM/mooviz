import { Header, Hero } from "../components";

interface iProps {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: iProps) => {
  return (
    <>
      <Header />
      <Hero />
      {children}
    </>
  );
};
