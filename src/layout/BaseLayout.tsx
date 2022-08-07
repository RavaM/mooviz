import { useEffect } from "react";
import { Banner, Header, Hero } from "../components";
import { iMovie } from "../types/types";

interface iProps {
  children: React.ReactNode;
  bgImage?: string;
  title: string;
  bannerText?: string;
  watchlist?: number[];
  watched?: number[];
  movie?: iMovie;
}

export const BaseLayout = ({
  children,
  bgImage,
  title,
  bannerText,
  movie,
  watchlist,
  watched,
}: iProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Hero
        bgImage={bgImage}
        title={title}
        movieId={movie?.id}
        watchlist={watchlist}
        watched={watched}
      />
      {bannerText && <Banner bannerText={bannerText} />}
      {children}
    </>
  );
};
