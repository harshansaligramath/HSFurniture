import React from "react";
import Home from "../component/MainPage/Home";

import Portfolio from "../component/Portfolio/Portfolio";
import Footer from "../component/Footer/Footer";
import FlashDeals from "../component/DealsOftheDay/FlashDeals";
import TrendingOffers from "../component/TrendingOffers/TrendingOffers";

const Pages = ({ productItems,TrendingOfferDetails, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home />
      
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Portfolio  productItems={productItems}/>
      <TrendingOffers  TrendingOfferDetails={TrendingOfferDetails} addToCart={addToCart}/>

    </>
  );
};

export default Pages;
