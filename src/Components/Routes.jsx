import Layout from "./Layout"; // Adjust the import path as needed
import App from "../App";
import Aboutme from "../pages/Aboutme";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/",
    element: <Layout />, // Wrap everything in the Layout
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

export default routes;

// const routes = [

//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/aboutme",
//     element: <Aboutme />,
//   },
//   {
//     path: "/services",
//     element: <Services />,
//   },
//   {
//     path: "/portfolio",
//     element: <Portfolio />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ];
// export default routes
