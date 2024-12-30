import PropTypes from "prop-types";

const Pagination = ({
  pageSize = [],
  onPageSizeChange,
  currentPageSize,
  onPrevClick,
  onNextClick,
  currentPageNo,
  total,
}) => {
  return (
    <>
      <div className="flex justify-end gap-5 mt-2 px-5">
        <div>
          <select
            className="py-1 px-2"
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
            value={currentPageSize}
          >
            {pageSize.map((size, index) => (
              <option value={size} key={index}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded px-4 py-1 bg-blue-400  hover:bg-blue-600 hover:text-white disabled:hover:text-black disabled:bg-gray-100"
            onClick={onPrevClick}
            disabled={currentPageNo === 1}
          >
            Prev
          </button>
          <button
            className="rounded px-4 py-1 bg-blue-400 hover:bg-blue-600 hover:text-white disabled:hover:text-black disabled:bg-gray-100"
            onClick={onNextClick}
            disabled={currentPageNo * currentPageSize > total}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.array,
  onPageSizeChange: PropTypes.string,
  currentPageSize: PropTypes.string,
  onPrevClick: PropTypes.string,
  onNextClick: PropTypes.string,
  currentPageNo: PropTypes.number,
  total: PropTypes.number,
};
export default Pagination;
