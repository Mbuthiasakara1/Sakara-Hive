import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  // Use the `useLocation` hook to get the current pathname
  const { pathname } = useLocation();

  // Scroll to the top whenever the pathname changes
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional: Use "smooth" for smooth scrolling
    });
  }, [pathname]); // Dependency array: triggers the effect when `pathname` changes

  // Render the nested routes using the `Outlet` component
  return <Outlet />;
}

export default Layout;
