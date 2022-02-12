import React from 'react'
import { Range, getTrackBackground } from "react-range";
const CustomRange = ({value,max,min,step,onChange}) => {
  return (
    <Range
    values={[value]}
    step={step}
    min={min}
    max={max}
    onChange={values =>onChange(values[0])}
    renderTrack={({ props, children }) => (
      <div
        onMouseDown={props.onMouseDown}
        className="w-full h-7 flex group"
        onTouchStart={props.onTouchStart}
        style={{
          ...props.style,
        
        }}
      >
        <div
          ref={props.ref}
          className="h-1 w-full rounded-md self-center "
          style={{
            
            background: getTrackBackground({
              values: [value],
              colors: ["#1db954", "#535353"],
              min,
              max
            }),
            alignSelf: "center"
          }}
        >
          {children}
        </div>
      </div>
    )}
    renderThumb={({ props, isDragged }) => (
      <div
        {...props}
        className={`h-3 w-3 rounded-full  bg-white ${!isDragged ? "opacity-0" : "" }group-hover:opacity-100 `}
        style={{
          ...props.style,
        
          boxShadow: "0 2px 4px 0 rgb(0 0 0 / %50)"
        }}
      >
        
      </div>
    )}
  />
  )
}

export default CustomRange