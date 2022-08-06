import { FilmList } from "../components";
import { BaseLayout } from "../layout/BaseLayout";

export const Home = () => {
  return (
    <BaseLayout
      bgImage="/images/movies-poster.jpg"
      title="MOOVIZ"
      bannerText="Benvenuto nella tua collezione di film"
    >
      <FilmList />
    </BaseLayout>
  );
};
