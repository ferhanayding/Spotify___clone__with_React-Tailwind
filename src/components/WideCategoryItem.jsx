function WideCategory({ category }) {
    return (
      <div
        style={{ background: category.color }}
        className="rounded-lg relative flex-shrink-0  w-[27.375rem] h-[13.75rem] "
      >
        <div className="absolute inset-0  overflow-hidden ">
          <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold   ">
            {category.title}
          </h3>
          <img
            src={category.cover}
            className="absolute w-32 shadow-spotify h-32 bottom-0 right-0 rotate-[25deg] translate-x-[18%] translate-y-[2%]   "
            alt=""
          />
        </div>
      </div>
    );
  }
  export default WideCategory