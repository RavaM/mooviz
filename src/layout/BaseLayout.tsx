import { useEffect } from "react";
import { Banner, Header, Hero } from "../components";

interface iProps {
  children: React.ReactNode;
  bgImage: string;
  title: string;
  bannerText: string;
}

export const BaseLayout = ({
  children,
  bgImage,
  title,
  bannerText,
}: iProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Hero bgImage={bgImage} title={title} />
      <Banner bannerText={bannerText} />
      {children}
    </>
  );
};
