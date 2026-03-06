// // import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

// import { createBrowserRouter, useParams } from 'react-router-dom';

// // const myRouterTree = createBrowserRouter([
// //   {
// //     path: 'customer',
// //     element: <Customer />,
// //     children: [
// //       { path: 'profile', element: <CustomerProfile /> },
// //       { path: 'tasks', element: <CustomerTasks /> },
// //     ],
// //   },
// //   {},
// // ]);

// // <RouterProvider router={myRouterTree}/>

// // <Outlet />;

// // Route Parameters : 'segment in the path that varies'

// // example.com/customer/123/tasks/abc

// const myRouterTree = createBrowserRouter([
//   {
//     path: '/customer/:id/tasks/:taskid', //  {id:123,taskid:'abc}
//   },
//   {},
// ]);

// // how do components access the route parameters ? useParams() hook !

// export function Examplecomponent() {
//   const params = useParams(); // returns {id:123,taskid:'abc}

//   console.log(params); // {id:123,taskid:'abc}
//   console.log(params.id); // 123
//   console.log(params.taskid); //'abc'
// }

// Search Parameters - Query parameters

// how to spot a search parameter in the BrowserURL ?

// https://www.example.com/?type=sometype&when=recent&x=100   searchParamsObject // {type:'sometype',when:'recent',x:100}

// ? indicates the first search parameter --- type=sometype
// & other search parameters --- when=recent

// How do components access the searchParamsObject

/* import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams(); //  {type:'sometype',when:'recent',x:100}

console.log(searchParams); //  {type:'sometype',when:'recent',x:100}

console.log(searchParams.get("type")); // 'sometype' 

setSearchParams({type:'someNewType',when:'past',x:500}); // mutate the searchParms object properties. 


 */
