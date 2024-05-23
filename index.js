import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./components/Listing";
import houses from "./autos"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="container" style={{ color: "blue" }} >

    {

    }
    {houses.map((house, index) => 
      <Listing key={index} Name={house.Name} Preis={house.Preis} imageURL={house.img}></Listing>
    )}
    
    </div>
  </>
);


