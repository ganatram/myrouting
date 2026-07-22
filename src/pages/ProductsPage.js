import { products } from "../data/products";

export function ProductsPage() {
  return (
    <div>
      <h2>Here are some great tools work with react </h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
