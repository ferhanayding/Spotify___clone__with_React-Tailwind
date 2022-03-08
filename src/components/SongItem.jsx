import React from 'react'
import { NavLink } from "react-router-dom";
import { Icon } from "Icons";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from 'stores/playerSlice';
const SongItem = ({item}) => {
    const dispatch =  useDispatch()
    const {current , controls , playing} = useSelector(state => state.player)
    // console.log(current)
    const imageStyle = (item) => {
        switch (item.type) {
          case "artist":
            return "rounded-full";
          case "podcast":
            return "rounded-xl";
    
          default:
            return "rounded";
        }
      };
      const changePlayIcon =()=>{
        if(current.id === item.id){
          if(playing){
            controls.pause()
          }else{
            controls.playing()
          }
        }else{

          dispatch(setCurrent(item))
        }
        // console.log("sd")
      }
    //   console.log(item)
    const isCurrentSong = (current?.id === item?.id && playing)
  return (
    <NavLink
    className={"bg-footer p-4 rounded hover:bg-active group "}
    key={item.id}
    to="/"
  >
    <div className="pt-[100%] relative mb-4">
      <img
        className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
          item
        )}`}
        src={item.image}
        alt=""
      />
      <button
      onClick={changePlayIcon}
        className={`h-10 w-10 rounded-full
        bg-primary absolute
         right-2 bottom-2 
          items-center
          justify-center ${!isCurrentSong ? "hidden" : "flex"} group-hover:flex group-focus:flex  `}
      >
        <Icon name={ isCurrentSong ? "pause" :  "play"} size={16} />
      </button>
    </div>
    <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
      {item.title}
    </h6>
    <p className="line-clamp-2 text-sm text-link mt-1 ">
      {item.description}
    </p>
  </NavLink>
  )
}

export default SongItem