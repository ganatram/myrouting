import { Link, NavLink, Form } from 'react-router-dom'; // - client side navigation
import logo from './logo.svg';
// import { FormEvent } from 'react';

export function Header() {
  //const [searchParams, setSearchParams] = useSearchParams(); // {}

  // const navigate = useNavigate(); // allows to navigate programatically

  /*   function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // it disable some nuance events when the form gets submitted
    console.log('form submit callback invoked');
    // FormData API - native api - Browser feature - meant to collect data from from controls
    const formData = new FormData(e.currentTarget);
    const formControlData = formData.get('tf1') as string; //'Apollo'
    // console.log(x);
    navigate(`products/?x=${formControlData}`); // setting the search parameter programatically
    // setSearchParams({ x }); // .com/?x=Apollo    // {x:'Apollo}
  } */

  return (
    <header className="text-center text-slate-50 bg-slate-900">
      <Form className="relative text-right" action="/products">
        <input
          type="search"
          placeholder="please type a value"
          // defaultValue={searchParams.get('search') ?? ''}
          name="x"
          className="absolute right-0 top-0 rounded py-2 px-3 text-black"
        />
      </Form>
      <Link to="">
        <img src={logo} alt="Logo" className="inline-block h-20" />
      </Link>
      <Link to="">
        <h1 className="text-2xl ">React Tools</h1>
      </Link>
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
        <Link to="admin">
          <button> Admin page</button>
        </Link>
      </nav>
    </header>
  );
}
