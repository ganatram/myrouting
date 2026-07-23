import { products } from "../data/products";
import { Link } from "react-router-dom";

export function ProductsPage() {
  return (
    <div>
      <h2>Here are some great tools work with react </h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
