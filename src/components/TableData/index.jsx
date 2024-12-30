
import { useCallback, useEffect, useMemo, useState } from "react";

import PropTypes from "prop-types";

import Pagination from "../Pagination";
import { DEFAULT_PAGE_SIZE } from "../../constants/constants";

const TableData = ({ data }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentData, setCurrentData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const tableData = useMemo(() => {
    const {
      daily: {
        time: labels = [],
        temperature_2m_max = [],
        temperature_2m_min = [],
        temperature_2m_mean = [],
        apparent_temperature_max = [],
        apparent_temperature_min = [],
        apparent_temperature_mean = [],
      },
    } = data || {};

    return labels.map((label, index) => {
      return {
        date: label,
        temperature_2m_max: temperature_2m_max[index],
        temperature_2m_min: temperature_2m_min[index],
        temperature_2m_mean: temperature_2m_mean[index],
        apparent_temperature_max: apparent_temperature_max[index],
        apparent_temperature_min: apparent_temperature_min[index],
        apparent_temperature_mean: apparent_temperature_mean[index],
      };
    });
  }, [data]);

  useEffect(() => {
    setCurrentData(tableData.slice(0, pageSize));
  }, [pageSize, tableData]);

  const onNextClick = useCallback(() => {
    if (pageNo * pageSize > tableData.length) return;

    setCurrentData(tableData.slice(pageNo * pageSize, (pageNo + 1) * pageSize));
    setPageNo(pageNo + 1);
  }, [tableData, pageNo, pageSize]);

  const onPrevClick = useCallback(() => {
    if (pageNo * pageSize < tableData.length && pageNo === 1) return;

    setCurrentData(
      tableData.slice((pageNo - 2) * pageSize, (pageNo - 1) * pageSize)
    );

    setPageNo(pageNo - 1);
  }, [tableData, pageNo, pageSize]);

  return (
    <div className="p-4">
      <h1 className="flex justify-center items-center my-4 bg-orange-500 text-white py-4 font-bold text-2xl">
        Weather Table Data
      </h1>

      <table className="table-auto border-collapse border border-gray-300 w-full text-center">
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
          {currentData.map((data, index) => (
            <tr key={index}>
              <td className="border border-gray-300">{data["date"]}</td>

              <td className="border border-gray-300 ">
                {data["temperature_2m_max"] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {data["temperature_2m_min"] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {data["temperature_2m_mean"] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {data["apparent_temperature_max"] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {data["apparent_temperature_min"] || "N/A"}
              </td>

              <td className="border border-gray-300 ">
                {data["apparent_temperature_mean"] || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <Pagination
        pageSize={[10, 20, 50]}
        currentPageSize={pageSize}
        onPageSizeChange={setPageSize}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        currentPageNo={pageNo}
        total={tableData.length}
      />
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
