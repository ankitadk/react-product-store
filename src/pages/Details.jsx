import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    // console.log("Details mounted");
    // return () => {
    //   console.log("Details unmounted");
    // };

    axios.get("https://fakestoreapi.com/products/" + id).then((product) => {
      console.log(product.data);
      setProduct(product.data);
    });
  }, []);

  return (
    <>
      <div className="mt-24 mx-auto w-[700px]">
        <div className="flex gap-5 items-center">
          <img
            className="h-56 w-[300px] object-contain"
            src={product.image}
            alt=""
          />
          <div className="">
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <p className="mt-2 text-neutral-600">{product.description}</p>
            <p className="mt-2">Rs. {product.price * 80}</p>
            <div className="flex gap-4 mt-2">
              <button className="bg-black border border-black text-white px-5 py-2">
                Purchase Now
              </button>
              <button className="bg-white border border-black text-black px-5 py-2">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
