import React from "react";
import "./PriceStatisticLink.scss";
import image1 from "../../../images/image1.png";

export default function PriceStatisticLink() {

    return (
        <div className="price-static-link">
            <div><img src={image1} alt="image" /> </div>
            <div className="price-static-link__text">Find the best gas prices in your state to
                maximize savings at the pump.</div>
            <button className="price-static-link__button">Find prices</button>
        </div>
    )
}