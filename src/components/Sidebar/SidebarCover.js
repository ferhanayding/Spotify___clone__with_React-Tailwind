import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/playerSlice";
import { Icon } from "../../Icons";
const SidebarCover = () => {
  const { current } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  return (
    <div className="pt-[100%] bg-black relative group">
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={current.image}
        alt=""
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className=" rotate-[270deg] absolute top-2 right-2 bg-black rounded-full p-1 opacity-0 group-hover:opacity-80 hover:scale-105"
      >
        <Icon size={16} name="arrowLeft" />
      </button>
    </div>
  );
};

export default SidebarCover;
