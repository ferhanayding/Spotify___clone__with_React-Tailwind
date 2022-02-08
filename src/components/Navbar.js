import React from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/navigation";

const Navbar = () => {
  const searchRoute = useRouteMatch("/search");
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute && <div>selam</div>}
      <Auth />
    </div>
  );
};

export default Navbar;
