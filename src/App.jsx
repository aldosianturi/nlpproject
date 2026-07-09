import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Detector from "./pages/Detector";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="dashboard">
        <Dashboard />
      </section>

      <section id="detector">
        <Detector />
      </section>

      <section id="about">
        <About />
      </section>
    </>
  );
}

export default App;