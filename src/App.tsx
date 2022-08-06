import "./App.scss";

import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
    </div>
  );
}

export default App;
