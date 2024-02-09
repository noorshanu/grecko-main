import Navbar from "components/Navbar";
import About from "sections/About";

import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";

import Roadmap from "sections/Roadmap";


function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <Navbar />

          <div className=" ">
            <Hero />
          </div>
        </div>

        <div className="" id="about">
          <About />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
