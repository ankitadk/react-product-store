import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

function Products() {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));

  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((products) => {
      setProducts(products.data);
    });
  }, []);

  return (
    <div className="flex gap-4 flex-wrap my-12 justify-center">
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            img={product.image}
            desc={product.description}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Products;
