import { useParams } from "react-router-dom";
import { products } from "../data/products";

export function ProductPage() {
  const Params = useParams(); // {id:3}
  const id = Params.id === undefined ? undefined : parseInt(Params.id);
  console.log(id); // 3
  const product = products.find((product) => product.id === id);
  console.log(product);

  return (
    <div>
      {product === undefined ? (
        <h1>Unknown product</h1>
      ) : (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
            }).format(product.price)}
          </p>
        </>
      )}
    </div>
  );
}
