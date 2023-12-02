import React from "react";

import { Card } from "../Card/Card";

const Main = ({ products, onAddItem }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          secondaryText={product.price}
          description={product.description}
          buttonText="Add to cart"
          onButtonClick={() => onAddItem(product)}
        />
      ))}
    </div>
  );
};

export default Main;
