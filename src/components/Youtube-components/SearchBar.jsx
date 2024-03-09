export const SearchBar = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col w-full lg:96 sm:w-20 md:w-96 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2 sm:flex-row items-center">
          <input
            id="default-search"
            className="w-full bg-slate-950 text-white border-none outline-none"
            placeholder="Search"
            required
          />
          <div className="rotate-90 hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </div>
          <div className="bg-gray-600 rounded-xl">
            <button className="font-bold py-2 px-4 bg-white-500 rounded inline-flex items-center">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
