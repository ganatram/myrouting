// import logo from './logo.svg';
// import './App.css';

import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { Routes } from "./Routes";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
