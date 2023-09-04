import React from 'react';
import Card from "../Card";

function ShoesList({ shoes }) {
  return (
    <div style={{ display: "flex" }}>
      {shoes.map((shoe, i) => (
        <Card shoes={shoe} i={i} key={i} />
      ))}
    </div>
  );
}

export default ShoesList;