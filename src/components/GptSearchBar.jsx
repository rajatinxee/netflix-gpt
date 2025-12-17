

const GptSearchBar = () => {
  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form className=" bg-black w-1/2 grid grid-cols-12">
          <input
            type="text"
            className="p-4 m-4 rounded-md col-span-9"
            placeholder="What would you like to watch Today?"
          />
          <button className=" m-4 bg-[rgb(229,9,20)] text-white font-bold rounded-md  col-span-3">Search</button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
