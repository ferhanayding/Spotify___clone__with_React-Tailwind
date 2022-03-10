function Category({ category }) {
    return (
      <div className="rounded-md before:pt-[100%] before:block relative overflow-hidden ">
        <div style={{ background: category.color }} className="absolute inset-0 ">
          <h3 className="p-4 text-2xl tracking-tighter font-semibold  ">
            {category.title}
          </h3>
          <img
            src={category.cover}
            className="absolute w-[6.25rem] shadow-spotify h-[6.25rem] bottom-0 right-0 rotate-[25deg] translate-x-[18%] translate-y-[2%]   "
            alt=""
          />
        </div>
      </div>
    );
  }
  export default Category