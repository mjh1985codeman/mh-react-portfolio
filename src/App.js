import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <header className="header-img light-txt">
      <h1 class="py-2 px-3">Michael J Hodges</h1>
    </header>
    <PortfolioContainer />
    <Footer />
  </div>
);

export default App;
