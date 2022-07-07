import React from "react";
// import Categories from "./Categories"
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home" style={{ backgroundColor: "white", marginTop:"120px" }}>
        <div className="container d_flex">
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
