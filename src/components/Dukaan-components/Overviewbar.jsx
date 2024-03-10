export const Overviewbar = () => {
  return (
    <div className="flex justify-between items-center p-2 mt-2 ml-2 mr-12">
      <div>
        <h1 className="text-xl">Overview</h1>
      </div>
      <div className="border-2 border-black p-2">
        <button>
          <div className="flex">
            <h1>This Month</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
