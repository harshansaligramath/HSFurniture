import React from "react";
import TrendingCard from "./TrendingCard";
import "./style.css";

const TrendingOffers = ({ TrendingOfferDetails, addToCart }) => {
  return (
    <>
      <section className="flash" style={{marginTop:"50px"}}>
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1 style={{marginLeft:"20px",marginRight:"50%"}}>TrendingOffers</h1>
            <button className="buttonview">View All</button>
          </div>
          <TrendingCard TrendingOfferDetails={TrendingOfferDetails} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default TrendingOffers;
