import PropTypes from "prop-types";
import { useState } from "react";

const monthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TableData = ({ data }) => {
  // console.log(data);
  const {
    daily: {
      time = [],
      temperature_2m_max = [],
      temperature_2m_min = [],
      temperature_2m_mean = [],
      apparent_temperature_max = [],
      apparent_temperature_min = [],
      apparent_temperature_mean = [],
    },
  } = data || {};
  const labels = time.map((dd) => {
    const date = new Date(dd);
    return `${date.getDate()} ${monthMap[date.getMonth()]}`;
  });


  // pagination
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of rows per page
  const totalPages = Math.ceil(labels.length / itemsPerPage);

  // Get paginated data
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const paginatedLabels = labels.slice(startIdx, endIdx);
  const MaxTemp = temperature_2m_max.slice(startIdx, endIdx);
  const MinTemp = temperature_2m_min.slice(startIdx, endIdx);
  const MeanTemp = temperature_2m_mean.slice(startIdx, endIdx);
  const ApparentMax = apparent_temperature_max.slice(startIdx, endIdx);
  const ApparentMin = apparent_temperature_min.slice(startIdx, endIdx);
  const ApparentMean = apparent_temperature_mean.slice(startIdx, endIdx);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  
  return (
    <div className="p-4">
      <h1 className="flex justify-center items-center my-4 bg-orange-500 text-white py-4 font-bold text-2xl">
       Weather Table Data
      </h1>

      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">
              Maximum Temperature (2 m)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Minimum Temperature (2 m)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Mean Temperature (2 m)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Maximum Apparent Temperature (2 m)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Minimum Apparent Temperature (2 m)
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Mean Apparent Temperature (2 m)
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedLabels.map((label, index) => (
            <tr key={index}>
              <td className="border border-gray-300">{label}</td>

              <td className="border border-gray-300 ">
                {MaxTemp[index] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {MinTemp[index] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {MeanTemp[index] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {ApparentMax[index] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {ApparentMin[index] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {ApparentMean[index] || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* pagination */}
      <div className="flex justify-end mr-10 mt-2">
        <button
          className="mx-1  text-sm font-semibold text-gray-900"
          onClick={handlePrevious}
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
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

TableData.propTypes = {
  data: PropTypes.shape({
    daily: PropTypes.shape({
      time: PropTypes.arrayOf(PropTypes.string),
      temperature_2m_max: PropTypes.arrayOf(PropTypes.number),
      temperature_2m_min: PropTypes.arrayOf(PropTypes.number),
      temperature_2m_mean: PropTypes.arrayOf(PropTypes.number),
      apparent_temperature_max: PropTypes.arrayOf(PropTypes.number),
      apparent_temperature_min: PropTypes.arrayOf(PropTypes.number),
      apparent_temperature_mean: PropTypes.arrayOf(PropTypes.number),
    }),
  }),
};

export default TableData;
