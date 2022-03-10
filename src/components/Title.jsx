import React from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from "Icons";
const Title = ({more=false ,title}) => {
  return (
    <div><header className="flex items-center justify-between mb-4 ">
    <NavLink to={more ?? "#"}>
      <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline cursor-pointer">
        {title}
      </h3>
    </NavLink>
    {more && (
      <NavLink
        className={
          "text-xs font-semibold uppercase text-link hover:underline tracking-wider"
        }
        to={more}
      >
        SEE ALL
      </NavLink>
    )}
  </header></div>
  )
}

export default Title