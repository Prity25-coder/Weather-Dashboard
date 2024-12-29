const Pagination = () => {
  return (<>
     <div className="flex justify-end mr-10 mt-2">
        <button
          className="mx-1  text-sm font-semibold text-gray-900"
         
        >
          &larr; Previous
        </button>

        <button className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
          1
        </button>
        <button className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
          2
        </button>
        <button className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
          3
        </button>
        <button className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">
          Last
        </button>
        <button
          className="mx-2 text-sm font-semibold text-gray-900"
        >
          Next &rarr;
        </button>
      </div>
  </>);
};
export default Pagination;
