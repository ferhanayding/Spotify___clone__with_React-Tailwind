import React from 'react'
import {Icon} from "../../Icons"
const Search = () => {
  return (
    <div className="mr-auto ml-4 relative">
      <label htmlFor="search"  className='absolute w-12 h-10 flex items-center justify-center top-0 left-0 text-black '>
        <Icon size = {24} name = "search" />
        </label>
        <input autoFocus={true} id='search' type="text" className=' max-w-full pl-12 text-black outline-none w-[22.75rem]  h-10 bg-white rounded-3xl text-sm placeholder-black/50 px-4 ' placeholder="Sanatçılar, şarkılar veya podcast'ler" />
        </div>
  )
}

export default Search