import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const PRODUCTS = [
  { id: 1, name: "name1", price: 100, description: "desc" },
  { id: 2, name: "name2", price: 1089700, description: "desc" },
  { id: 3, name: "name3", price: 17809700, description: "desc" },
  { id: 4, name: "name4", price: 100, description: "desc" },
  { id: 5, name: "name5", price: 100, description: "desc" },
  { id: 6, name: "name6", price: 100, description: "desc" },
  { id: 7, name: "name7", price: 100, description: "desc" },
  { id: 8, name: "name1", price: 100, description: "desc" },
  { id: 9, name: "name1", price: 100, description: "desc" },
  { id: 10, name: "name1", price: 100, description: "desc" },
  { id: 11, name: "name1", price: 100, description: "desc" },
  { id: 12, name: "name1", price: 100, description: "desc" },
  { id: 13, name: "name1", price: 100, description: "desc" },
];

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const addItemToCard = (item) => {
    setCartProducts((current) => {
      const itemExistsIndex = current.findIndex(
        (product) => product.id === item.id
      );

      if (itemExistsIndex !== -1) {
        const updatedItems = current.map((product, index) =>
          index === itemExistsIndex
            ? {
                ...product,
                itemCount: product.itemCount + 1,
              }
            : product
        );
        return updatedItems;
      } else {
        return [...current, { ...item, itemCount: 1 }];
      }
    });
  };

  return (
    <div>
      <Header cartProducts={cartProducts} />
      <Main products={PRODUCTS} onAddItem={addItemToCard} />
    </div>
  );
}

export default App;
