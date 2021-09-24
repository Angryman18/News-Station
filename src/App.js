import React from "react";
import Trending from "./Components/Content/Trending";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeRouter from "./Components/Pages/HomeRoutes";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Trending />
      <HomeRouter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
