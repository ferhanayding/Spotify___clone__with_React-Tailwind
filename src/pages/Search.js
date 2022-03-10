import React, { useEffect, useRef, useState } from "react";
import categories from "data/categories";
import Title from "components/Title";
import favCategory from "data/favCategory";
// import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Icon } from "Icons";
import WideCategory from "components/WideCategoryItem";
import CategoryItems from "components/CategoryItem";

const Search = () => {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const favoritesRef = useRef();

  useEffect(() => {
    const scrollHandle = () => {
      // console.log(ferhan.scrollLeft);
      // console.log(favoritesRef.current.scrollWidth);
      // console.log(favoritesRef.current.offsetWidth);
      const isEnd =
        scroll.scrollLeft + scroll.offsetWidth === scroll.scrollWidth;
      const isBegin = scroll.scrollLeft === 0;
      // console.log(isEnd);
      // console.log(isBegin + "isbegin");
      setNext(!isBegin);
      setPrev(!isEnd);
    };
    const scroll = favoritesRef.current;
    favoritesRef.current.addEventListener("scroll", scrollHandle);
  }, [favoritesRef]);
  const handleScrollNext = () => {
    const scroll = favoritesRef.current;
    scroll.scrollLeft += scroll.offsetWidth / 4;
  };
  const handleScrollPrev = () => {
    const scroll = favoritesRef.current;
    scroll.scrollLeft -= scroll.offsetWidth / 4;
  };
  return (
    <div className="">
      <section className="mb-8 relative">
        <Title title="En çok Dinlediğin Türler" />
        {prev && (
          <button
            className="absolute w-12 flex items-center justify-center h-12 z-10 top-[50%] hover:scale-105 -right-6 bg-white text-black rounded-full p-1 "
            onClick={handleScrollNext}
          >
            <Icon size={32} name={"next"} />
            {/* next */}
          </button>
        )}
        {next && (
          <button
            className="absolute w-12 flex items-center justify-center h-12 z-10 top-[50%] hover:scale-105 -left-6 bg-white text-black rounded-full p-1 "
            onClick={handleScrollPrev}
          >
            <Icon size={32} name={"prev"} />
          </button>
        )}
        <div className="">
          <ScrollContainer
            innerRef={favoritesRef}
            className="flex transitions gap-6 overflow-x-hidden scrollable"
          >
            {favCategory.map((category, index) => (
              <WideCategory key={index} category={category} />
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title="Hepsine göz at" />
        <div className=" grid grid-cols-5 gap-6  ">
          {categories.map((category, index) => (
            <CategoryItems key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
