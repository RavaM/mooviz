import "./App.scss";

import { Header, Banner, Hero, FilmList } from "./components/";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <FilmList />
    </div>
  );
}

export default App;
