import { Banner, FilmList, Header, Hero } from "../components";
import { BaseLayout } from "../layout/BaseLayout";

export const Home = () => {
  return (
    <BaseLayout>
      <Banner />
      <FilmList />
    </BaseLayout>
  );
};
