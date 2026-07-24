import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>React Tools</h1>
      <nav>
        <Link to="products"> Go to products </Link>
      </nav>
    </header>
  );
}


