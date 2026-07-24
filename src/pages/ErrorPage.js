import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError(); // {}
  // console.log(`error status is ${error.status}`);
  return (
    <>
      <div> error status is {error.status} </div>
      {/* <div> {error.statusText} </div> */}
    </>
  );
}
