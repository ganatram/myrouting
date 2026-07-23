import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError(); // {}
  console.log(error);
  return (
    <>
      <div> {error.status} </div>
      <div> {error.statusText} </div>
    </>
  );
}
