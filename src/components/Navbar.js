import React from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/navigation";
import Search from "./Navbar/Search";

const Navbar = () => {
  const searchRoute = useRouteMatch("/search");
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute && <Search />}
      <Auth />
    </div>
  );
};

export default Navbar;
