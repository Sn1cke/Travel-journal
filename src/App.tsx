import React from "react";
import "./App.scss";
import Navigation from "./components/nav";
import Card from "./components/card";
import travelData from "./data";

export default function App() {
  const card = travelData.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <div className="wrapper">
        <Navigation />
        {card}
      </div>
    </>
  );
}
