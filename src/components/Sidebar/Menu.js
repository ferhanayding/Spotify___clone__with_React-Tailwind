import { Icon } from "Icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            activeClassName="bg-active text-white"
            href="#"
            exact
            className=" h-10 flex items-center gap-x-4   text-sm font-semibold text-link  rounded  hover:text-white px-4  "
          >
            <span>
              <Icon name="home" />
            </span>
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            activeClassName="bg-active text-white"
            href="#"
            className="h-10 flex items-center  gap-x-4  text-sm font-semibold  text-link rounded hover:text-white px-4  "
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            activeClassName="bg-active text-white"
            href="#"
            className="h-10 flex items-center gap-x-4   text-sm font-semibold  text-link rounded hover:text-white px-4  "
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
