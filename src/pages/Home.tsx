import { FilmList } from "../components";
import { BaseLayout } from "../layout/BaseLayout";

export const Home = () => {
  return (
    <BaseLayout
      bgImage="/images/movies-poster.jpg"
      title="MOOVIZ"
      bannerText="Welcome to your personal movie collection"
    >
      <FilmList />
    </BaseLayout>
  );
};
