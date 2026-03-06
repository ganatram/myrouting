import { Link, NavLink, useSearchParams } from 'react-router-dom'; // - client side navigation
import logo from './logo.svg';
import { FormEvent } from 'react';

export function Header() {
  const [searchParams, setSearchParams] = useSearchParams(); // {prop1:'',prop2:''}

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // it disable some nuance events when the form gets submitted
    console.log('form submit callback invoked');
    // FormData API - native api - Browser feature - meant to collect data from from controls
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    console.log(search);
    setSearchParams({ search });
  }

  return (
    <header className="text-center text-slate-50 bg-slate-900">
      <form className="relative text-right" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="please type a value"
          defaultValue={searchParams.get('search') ?? ''}
          name="search"
          className="absolute right-0 top-0 rounded py-2 px-3 text-black"
        />
      </form>
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
      </nav>
    </header>
  );
}
