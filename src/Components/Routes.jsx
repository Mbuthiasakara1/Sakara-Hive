import App from "../App"
import Aboutme from "../pages/Aboutme";
import Services from "../pages/Services"


const routes = [
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
];
export default routes